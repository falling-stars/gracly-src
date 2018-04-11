const fs = require('fs')
const {resolve} = require('path')
const LRU = require('lru-cache')
const noCache = require('./no-cache')
const {createBundleRenderer} = require('vue-server-renderer')
const serverBundle = require('../dist/vue-ssr-server-bundle')
const clientManifest = require('../dist/vue-ssr-client-manifest')
const template = fs.readFileSync(resolve(__dirname, '../src/template.html'), 'utf-8')
const webCache = LRU({
  max: 200,
  maxAge: 1000 * 60 * 10
})

const renderer = createBundleRenderer(serverBundle, {
  runInNewContext: false,
  template,
  clientManifest
})
const render = ctx => new Promise((resolve, reject) => {
  const url = ctx.url
  // 缓存管理
  if (noCache.has(url)) {
    renderer.renderToString(ctx, (error, html) => {
      error ? reject(error) : resolve(html)
    })
  } else {
    if (!webCache.has(url)) {
      renderer.renderToString(ctx, (error, html) => {
        if (error) {
          reject(error)
        } else {
          webCache.set(url, html)
          resolve(html)
        }
      })
    } else {
      resolve(webCache.get(url))
    }
  }
})

module.exports = render