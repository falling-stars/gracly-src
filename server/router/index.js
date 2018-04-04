const fs = require('fs')
const {resolve} = require('path')
const Router = require('koa-router')
const fileRead = require('../util/file-read')
const router = new Router();

router.get('/', async (ctx, next) => {
  ctx.type = 'html'
  ctx.body = await fileRead('index.html')
})
module.exports = router