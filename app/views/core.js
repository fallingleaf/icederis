
class View {

    constructor(model) {
        this.model = model
    }

    returnSuccess(ctx, data = {}) {
        ctx.body = {
            success: true,
            data: data
        }
        ctx.status = 200
    }

    returnError(ctx, msg = '', code = 400) {
        ctx.body = {
            success: false,
            msg,
            code
        }
        ctx.status = code
    }

    list() {
        return async (ctx, next) => {
            let objs = await this.model.fetchAll()
            this.returnSuccess(ctx, objs)
        }
    }

    show() {
        return async (ctx, next) => {
            let params = ctx.params
            console.log(params)
            let obj = await this.model.where({id: params.pk}).fetch()
            this.returnSuccess(ctx, obj)
        }
    }

    create() {
        return async (ctx, next) => {
            console.log(ctx.body)
            this.returnSuccess(ctx, [])
        }

    }

    remove() {
        return async (ctx, next) => {
            this.returnSuccess(ctx, [])
        }
    }

    registerRoutes(router, name) {
        router
            .get(`${name}-list`, `/${name}`, this.list())
            .post(`${name}-create`, `/${name}`, this.create())
            .get(`${name}-show`, `/${name}/:pk`, this.show())
            .del(`${name}-delete`, `/${name}/:pk`, this.remove())
    }
}

export default View
