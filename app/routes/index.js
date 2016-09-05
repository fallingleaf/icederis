import UserApi from '../views/users'
import Home from '../views/home'

const router = require('koa-router')()

// index page
router.get('home', '/', Home())

// api registrations
UserApi.registerRoutes(router, 'users')

export default router
