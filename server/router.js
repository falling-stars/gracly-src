const Router = require('koa-router')
const router = new Router()

router.get('/index', async ctx => {
  ctx.status = 200
  ctx.type = 'text/plain'
  ctx.body = 'i am index'
})

module.exports = router