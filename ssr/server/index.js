const http = require('http')
const https = require('https')
const {resolve} = require('path')
const Koa = require('koa')
const server = require('koa-static')
const router = require('./router/index')
const app = new Koa()

app.use(server(resolve(__dirname, '../dist'), {index: "next", maxage:10000000000,immutable: true}))
app.use(router.routes()).use(router.allowedMethods())

http.createServer(app.callback()).listen(8080)