
export function responseSuccess(ctx, data = {}) {
    ctx.body = {
        success: true,
        data: data
    }
    ctx.status = 200
}

export function responseError(ctx, msg = '', code = 400) {
    ctx.body = {
        success: false,
        msg,
    }
    ctx.status = code
}

class View {

    constructor(model) {
        this.model = model
    }

    list() {
        return async (ctx, next) => {
            let objs = await this.model.fetchAll()
            return responseSuccess(ctx, objs)
        }
    }

    show() {
        return async (ctx, next) => {
            let params = ctx.params
            console.log(params)
            let obj = await this.model.where({id: params.pk}).fetch()
            if(obj == null) {
                return responseError(ctx, 'Object not found', 404)
            }
            else {
                return responseSuccess(ctx, obj)
            }
        }
    }

    create() {
        return async (ctx, next) => {
            console.log(ctx.body)
            return responseSuccess(ctx, [])
        }

    }

    remove() {
        return async (ctx, next) => {
            return responseSuccess(ctx, [])
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
