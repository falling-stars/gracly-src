const {resolve} = require('path')
const fs = require('fs')
const Koa = require('koa')
const Router = require('koa-router')
const router = new Router()
const app = new Koa()
const {createBundleRenderer} = require('vue-server-renderer')

function createRenderer(bundle, options) {
  return createBundleRenderer(bundle, Object.assign(options, {
    basedir: resolve(__dirname, '../dist-pc'),
    runInNewContext: false
  }))
}

let renderer

const readyPromise = require('./setup-dev-server')(
  app,
  resolve(__dirname, '../src/pc/template.html'),
  (bundle, options) => renderer = createRenderer(bundle, options)
)

function render(ctx) {
  return new Promise(resolve => {
    ctx.set('Content-Type', 'text/html')
    const handleError = err => {
      if (err.url) {
        ctx.body = err.url
      } else if (err.code === 404) {
        ctx.status = 404
      } else {
        res.body = '500 | Internal Server Error'
        console.error(`error during render : ${ctx.url}`)
        console.error(err.stack)
      }
    }

    const context = {
      url: ctx.url
    }
    renderer.renderToString(context, (err, html) => {
      if (err) {
        return handleError(err)
      }
      resolve(html)
    })
  })
}

router.get('*', async (ctx, next) => {
  ctx.type = 'html'
  await readyPromise
  ctx.body = await render(ctx)
})
app.use(router.routes()).use(router.allowedMethods())
app.use(async (ctx, next) => {
  if (!/^\/api.+/.test(ctx.url)) {
    ctx.body = 43
  } else {
    await next()
  }
})

app.listen(8080, () => console.log('Web Run In https://localhost:8080'))