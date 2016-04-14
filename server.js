const port = 3000
const koa = require('koa')()
//  const router = require('koa-router')
const serve = require('koa-static')
const compress = require('koa-compress')

koa.use(compress())
koa.use(serve('public'))
koa.use(function * () {
  this.body = '<!doctype html><meta charset="utf-8"><title>silverback</title><link rel="stylesheet" href="/main.css"><script defer src="/bundle.js"></script><div class="loader">Loading...</div>'
})

koa.listen(port)
console.log(`Listening on port ${port}`)
