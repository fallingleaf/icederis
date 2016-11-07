import User from '../models/users'
import parse from 'co-body'
import { responseSuccess, responseError } from './core'

export default function login() {
    return async(ctx, next) => {
        let params = ctx.form
        if(params.email == undefined || params.password == undefined) {
            return responseError(ctx, 'Invalid request')
        }
        let auth = await User.where({email: params.email, password: params.password}).fetch()
        if(auth == null) {
            console.log("no valid user...")
            return responseError(ctx, 'Invalid username or password')
        }
        return responseSuccess(ctx, {user: auth})
    }
}
