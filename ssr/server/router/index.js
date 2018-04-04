const fs = require('fs')
const Router = require('koa-router')
const render = require('../util/render')
const router = new Router();

router.get('*', async (ctx, next) => {
  ctx.type = 'html'
  ctx.body = await render(ctx)
})
module.exports = router