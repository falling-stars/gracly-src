const http = require('http')
const https = require('https')
const {resolve} = require('path')
const fs = require('fs')
const Koa = require('koa')
const server = require('koa-static')
const router = require('./router/index')
const app = new Koa()
const ssh = {
  key: fs.readFileSync(resolve(__dirname, '../../server/ssh/ssh.key')),
  cert: fs.readFileSync(resolve(__dirname, '../../server/ssh/ssh.pem'))
}

app.use(server(resolve(__dirname, '../dist'), {index: "next", maxage:10000000000,immutable: true}))
app.use(router.routes()).use(router.allowedMethods())

const httpsPort = process.env.NODE_ENV === 'production' ? 443 : 4433
const httpPort = process.env.NODE_ENV === 'production' ? 80 : 8080

https.createServer(ssh, app.callback()).listen(httpsPort,()=>console.log('app run in '+httpsPort))

const redirect = new Koa()
redirect.use(async ctx => {
  ctx.status = 301
  ctx.set({'Location': 'https://www.gracly.com'})
})
redirect.listen(httpPort)