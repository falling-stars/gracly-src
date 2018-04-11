const fs = require('fs')
const Koa = require('koa')
const router = require('./router')
const app = new Koa()

app.use(router.routes()).use(router.allowedMethods())

app.listen(8888, () => console.log(`DataServer Run In http://localhost:8888`))