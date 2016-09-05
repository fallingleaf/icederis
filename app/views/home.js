const views = require('co-views')
const path = require('path')

let render = views(path.resolve(__dirname, '../templates'), {ext: 'ejs'})

export default function home() {
    return async(ctx, next) => {
        ctx.body = await render('index')
    }
}
