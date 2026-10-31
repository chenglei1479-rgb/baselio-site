const { test } = require('node:test')
const assert = require('node:assert/strict')
const fs = require('node:fs')
const vm = require('node:vm')
const path = require('node:path')
const root = path.join(__dirname, '..', 'public')
const source = fs.readFileSync(path.join(root, 'app.js'), 'utf8')
function load(query = '?lang=zh', saved, blockedStorage = false, options = {}) {
  const select = { addEventListener(type, handler) { this.handler = handler } }
  const context = {
    URL, URLSearchParams,
    navigator: options.navigator,
    document: { documentElement: {}, body: { dataset: { page: options.page } }, getElementById: id => id === 'language' ? select : options.nodes?.[id] ?? null,
      querySelectorAll: () => [], querySelector: () => ({ content: '' }) },
    location: { href: 'http://localhost/index.html' + query, search: query },
    history: { replaceState(a, b, url) { context.location.href = String(url) } },
    localStorage: { getItem() { if (blockedStorage) throw Error('denied'); return saved }, setItem() { if (blockedStorage) throw Error('denied') } }
  }
  vm.createContext(context)
  vm.runInContext(source + '\n globalThis.catalog = dictionaries', context)
  return { context, select }
}
test('all visible copy and accessible labels exist in every language', () => {
  const { context } = load()
  const keys = new Set()
  for (const file of ['index.html', 'beta.html', 'trust.html']) {
    const html = fs.readFileSync(path.join(root, file), 'utf8')
    for (const match of html.matchAll(/data-i18n(?:-aria)?="([^"]+)"/g)) keys.add(match[1])
  }
  for (const language of ['zh', 'en', 'ja']) {
    for (const key of keys) assert.ok(context.catalog[language][key], `${language}: ${key}`)
    assert.deepEqual(Object.keys(context.catalog[language]).sort(), Object.keys(context.catalog.zh).sort())
  }
})
test('language URL wins over storage and changing language preserves query and hash', () => {
  const { context, select } = load('?lang=ja&role=1', 'en')
  assert.equal(context.document.documentElement.lang, 'ja')
  context.location.href += '#main'
  select.handler({ target: { value: 'en' } })
  assert.equal(context.document.documentElement.lang, 'en')
  assert.equal(context.location.href, 'http://localhost/index.html?lang=en&role=1#main')
})
test('invalid language and blocked localStorage cannot break the page', () => {
  for (const input of ['?lang=invalid', '?lang=__proto__', '?lang=constructor']) {
    assert.equal(load(input, null, true).context.document.documentElement.lang, 'zh')
  }
  assert.equal(load('', 'ja').context.document.documentElement.lang, 'ja')
})
test('static links resolve, ids are unique and each page has one main heading', () => {
  for (const file of ['index.html', 'beta.html', 'trust.html']) {
    const html = fs.readFileSync(path.join(root, file), 'utf8')
    const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(m => m[1])
    assert.equal(ids.length, new Set(ids).size)
    assert.equal([...html.matchAll(/<h1[ >]/g)].length, 1)
    for (const [, href] of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
      if (/^(https?:|mailto:)/.test(href)) continue
      const [target, hash] = href.split('#')
      const targetFile = target.split('?')[0] || file
      assert.ok(fs.existsSync(path.join(root, targetFile)), href)
      if (hash) assert.ok(fs.readFileSync(path.join(root, targetFile), 'utf8').includes(`id="${hash}"`), href)
    }
  }
})
test('beta form stays inert without JavaScript and does not submit to a server', () => {
  const html = fs.readFileSync(path.join(root, 'beta.html'), 'utf8')
  assert.match(html, /<form id="beta-form" hidden aria-describedby="privacy-notice">/)
  assert.match(html, /href="mailto:hello@baselio.dev"/)
  assert.doesNotMatch(source, /\bfetch\s*\(|XMLHttpRequest|sendBeacon/)
  assert.match(source, /event.preventDefault\(\)/)
})
test('trust page uses its own translated title', () => {
  const { context } = load('?lang=en', null, false, { page: 'trust' })
  assert.equal(context.document.title, 'Baselio — Data and privacy: understand before use')
})
function copyHarness(writeText) {
  let handler
  const nodes = {
    'copy-draft': { addEventListener(type, fn) { handler = fn } },
    'draft-panel': { hidden: true },
    'draft': { value: '', focus() { this.focused = true }, select() { this.selected = true } },
    'draft-status': { textContent: '' }
  }
  load('?lang=en', null, false, { nodes, navigator: { clipboard: { writeText } } })
  nodes['draft-panel'].hidden = false
  nodes.draft.value = 'Example enquiry'
  return { nodes, click: () => handler() }
}
test('copy confirms completion only after the clipboard write succeeds', async () => {
  let copied
  const { nodes, click } = copyHarness(async text => { copied = text })
  await click()
  assert.equal(copied, 'Example enquiry')
  assert.equal(nodes['draft-status'].textContent, 'Draft copied, not sent.')
})
test('clipboard denial selects the draft for manual copying', async () => {
  const { nodes, click } = copyHarness(async () => { throw Error('denied') })
  await click()
  assert.equal(nodes.draft.focused, true)
  assert.equal(nodes.draft.selected, true)
  assert.match(nodes['draft-status'].textContent, /Automatic copy is unavailable/)
})
test('a late clipboard result never overwrites a changed-draft status', async () => {
  let finish
  const { nodes, click } = copyHarness(() => new Promise(resolve => { finish = resolve }))
  const pending = click()
  nodes['draft-panel'].hidden = true
  nodes.draft.value = ''
  nodes['draft-status'].textContent = 'Your entries changed.'
  finish()
  await pending
  assert.equal(nodes['draft-status'].textContent, 'Your entries changed.')
})
