import * as koa from 'koa'
import * as Bodyparser from 'koa-bodyparser'
import * as cors from 'koa2-cors'
import * as KoaRouter from 'koa-router'
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
app.use(router.routes())
app.use(Bodyparser())
app.use(renderMiddleware(renderConfig))

app.listen(8100, () => {
    console.log('node server is running at' + 8100)
})

