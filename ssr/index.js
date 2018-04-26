const http = require('http')
const https = require('https')
const {resolve} = require('path')
const fs = require('fs')
const Koa = require('koa')
const server = require('koa-static')
const mount = require('koa-mount')
const router = require('./router')
const proxy = require('koa-better-http-proxy')
const app = new Koa()
const ssh = {
  key: fs.readFileSync(resolve(__dirname, '../ssh/ssh.key')),
  cert: fs.readFileSync(resolve(__dirname, '../ssh/ssh.pem'))
}
const proxyConfig = {preserveReqSession: true}
app.use(server(resolve(__dirname, '../dist-pc'), {index: 'default', maxage: 1000 * 60 * 60 * 24 * 30, immutable: true}))
app.use(server(resolve(__dirname, '../dist-m'), {index: 'default', maxage: 1000 * 60 * 60 * 24 * 30, immutable: true}))
app.use(router.routes()).use(router.allowedMethods())
app.use(async (ctx, next) => {
  if (!/^\/api.+/.test(ctx.url)) {
    ctx.body = 43
  } else {
    await next()
  }
})
app.use(mount('/api', proxy('http://localhost:8888/', proxyConfig)))

if (process.env.NODE_ENV === 'production') {
  https.createServer(ssh, app.callback()).listen(443, () => console.log('Web Run In https://localhost:443'))
  const redirect = new Koa()
  const redirectURL = 'https://www.gracly.com'
  redirect.use(async ctx => {
    ctx.status = 301
    ctx.set({'Location': redirectURL})
  })
  redirect.listen(80, () => console.log(`端口：80已重定向到：${redirectURL}`))
} else {
  app.listen(8080, () => console.log('Web Run In http://localhost:8080'))
}