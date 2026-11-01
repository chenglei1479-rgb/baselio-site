const { test } = require('node:test')
const assert = require('node:assert/strict')
const fs = require('node:fs')
const vm = require('node:vm')
const crypto = require('node:crypto')
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
  vm.runInContext(source + '\n globalThis.catalog = dictionaries; globalThis.validateBeta = betaErrors', context)
  return { context, select }
}
test('all visible copy and accessible labels exist in every language', () => {
  const { context } = load()
  const keys = new Set()
  for (const file of ['index.html', 'beta.html', 'trust.html']) {
    const html = fs.readFileSync(path.join(root, file), 'utf8')
    for (const match of html.matchAll(/data-i18n(?:-aria|-alt)?="([^"]+)"/g)) keys.add(match[1])
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
  assert.match(html, /href="mailto:chenglei1479@gmail.com"/)
  assert.doesNotMatch(source, /\bfetch\s*\(|XMLHttpRequest|sendBeacon/)
  assert.match(source, /event.preventDefault\(\)/)
})
test('trust page uses its own translated title', () => {
  const { context } = load('?lang=en', null, false, { page: 'trust' })
  assert.equal(context.document.title, 'Baselio — Data and privacy: understand before use')
})
test('beta validation reports all omissions and rejects unsupported selections', () => {
  const { context } = load()
  assert.deepEqual(Array.from(context.validateBeta({ role: '', task: '', consent: false })), ['role', 'task', 'consent'])
  assert.deepEqual(Array.from(context.validateBeta({ role: 'unknown', task: 'constructor', consent: true })), ['role', 'task'])
  for (const role of ['0', '1', '2']) {
    assert.deepEqual(Array.from(context.validateBeta({ role, task: '0', consent: true })), [])
  }
})
test('product screenshots match the recorded original capture hashes', () => {
  const record = JSON.parse(fs.readFileSync(path.join(root, 'media/provenance.json'), 'utf8'))
  assert.equal(record.language, 'en')
  assert.equal(record.files.length, 3)
  for (const file of record.files) {
    const bytes = fs.readFileSync(path.join(root, 'media', file.path))
    assert.equal(bytes.subarray(0, 3).toString('hex'), 'ffd8ff')
    assert.equal(crypto.createHash('sha256').update(bytes).digest('hex'), file.sha256)
  }
})
test('English full workbench is the lead product image', () => {
  const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8')
  const overview = html.indexOf('src="media/baselio-workbench-en.jpg"')
  assert.ok(overview > 0 && overview < html.indexOf('src="media/baselio-home-en.jpg"'))
  assert.match(html, /class="product-overview"/)
  assert.doesNotMatch(html, /src="media\/baselio-workspace\.jpg"/)
})
test('all contact paths use the approved public email', () => {
  const { context } = load()
  for (const language of ['zh', 'en', 'ja']) {
    for (const key of ['beta.ready', 'beta.fallback', 'privacy.0.body']) {
      assert.ok(context.catalog[language][key].includes('chenglei1479@gmail.com'))
    }
  }
  for (const file of ['index.html', 'beta.html', 'trust.html', 'app.js']) {
    const text = fs.readFileSync(path.join(root, file), 'utf8')
    assert.ok(text.includes('mailto:chenglei1479@gmail.com'))
    assert.ok(!text.includes('hello@baselio.dev'))
  }
})
test('main body text palette meets normal-text contrast', () => {
  const css = fs.readFileSync(path.join(root, 'styles.css'), 'utf8')
  const color = name => css.match(new RegExp('--' + name + ':\\s*(#[a-fA-F0-9]{6})'))[1]
  const luminance = hex => {
    const rgb = [1, 3, 5].map(i => parseInt(hex.slice(i, i + 2), 16) / 255).map(n => n <= 0.04045 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4)
    return rgb[0] * 0.2126 + rgb[1] * 0.7152 + rgb[2] * 0.0722
  }
  for (const foreground of ['ink', 'muted', 'accent']) {
    for (const background of ['bg', 'bg-soft']) {
      const values = [luminance(color(foreground)), luminance(color(background))].sort((a, b) => b - a)
      assert.ok((values[0] + 0.05) / (values[1] + 0.05) >= 4.5, `${foreground} on ${background}`)
    }
  }
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
