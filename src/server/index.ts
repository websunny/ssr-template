import * as koa from 'koa'
import * as Bodyparser from 'koa-bodyparser'
import * as cors from 'koa2-cors'
import * as KoaRouter from 'koa-router'
const render =require('koa-art-template')
const serve =require('koa-static')
import renderMiddleware from './middleware/renderMiddleware'
import renderConfig from './config/renderConfig'
const app = new koa()
const router = new KoaRouter()
app.use(
    cors({
        allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
        allowMethods: ['GET', 'POST', 'DELETE'],
        credentials: true,
        exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
        maxAge: 5,
        origin: () => '*',
    })
)
app.use(Bodyparser())
app.use(serve('build/static', { proxy: '/' }))

render(app, {
    root: 'build/static',
    minimize: true,
})

app.use(router.routes())
app.use(renderMiddleware(renderConfig))

app.listen(8100, () => {
    console.log('node server is running at ' + 8100)
})

