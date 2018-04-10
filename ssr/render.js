const fs = require('fs')
const {resolve} = require('path')
const {createBundleRenderer} = require('vue-server-renderer')
const serverBundle = require('../dist/vue-ssr-server-bundle')
const clientManifest = require('../dist/vue-ssr-client-manifest')
const template = fs.readFileSync(resolve(__dirname, '../src/template.html'), 'utf-8')

const renderer = createBundleRenderer(serverBundle, {
  runInNewContext: false,
  template,
  clientManifest
})
const render = (ctx) => {
  return new Promise((resolve, reject) => {
    renderer.renderToString(ctx, (error, html) => {
      error ? reject(error) : resolve(html)
    })
  })
}
module.exports = render