const { test } = require('node:test')
const assert = require('node:assert/strict')
const fs = require('node:fs')
const vm = require('node:vm')
const path = require('node:path')
const root = path.join(__dirname, '..', 'public')
const source = fs.readFileSync(path.join(root, 'app.js'), 'utf8')
function load(query = '?lang=zh', saved, blockedStorage = false) {
  const select = { addEventListener(type, handler) { this.handler = handler } }
  const context = {
    URL, URLSearchParams,
    document: { documentElement: {}, getElementById: id => id === 'language' ? select : null,
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
  for (const file of ['index.html', 'beta.html']) {
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
  for (const file of ['index.html', 'beta.html']) {
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
  assert.match(html, /<form id="beta-form" hidden>/)
  assert.match(html, /href="mailto:hello@baselio.dev"/)
  assert.doesNotMatch(source, /\bfetch\s*\(|XMLHttpRequest|sendBeacon/)
  assert.match(source, /event.preventDefault\(\)/)
})
