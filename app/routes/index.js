import UserApi from '../views/users'
import Home from '../views/home'
import login from '../views/auth'

const router = require('koa-router')()

// index page
router
    .get('home', '/', Home())
    .post('/login', login())

// view class registrations
UserApi.registerRoutes(router, 'users')

export default router
