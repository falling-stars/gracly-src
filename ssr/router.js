const fs = require('fs')
const Router = require('koa-router')
const render = require('./render')
const router = new Router()

router.get('*', async (ctx, next) => {
  if (/^(\/|\/start|\/document|\/hub|\/about)$/.test(ctx.url)) {
    ctx.type = 'html'
    ctx.body = await render(ctx)
  } else {
    await next()
  }
})
module.exports = router