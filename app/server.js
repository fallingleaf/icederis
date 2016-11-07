import Koa from 'koa'
import parse from 'co-body'
import serve from 'koa-static'
import router from './routes'
const path = require('path')
const app = new Koa()

app.use(async (ctx, next) => {
    if (ctx.method == 'POST') {
        ctx.form = await parse(ctx, { limit: '1kb'})
    }
    await next()
})

app.use(async (ctx, next) => {
    const start = new Date()
    await next()
    const ms = new Date() - start
    console.log(`request: ${ctx.method} ${ctx.url} - ${ms}ms`)
})

app.use(serve(path.resolve('./static')))
app.use(router.routes())
app.use(router.allowedMethods())


app.listen(8000)

console.log('Listening on port 8000...')

export default app
