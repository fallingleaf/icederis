import App from 'containers/App'
import Login from 'containers/Login'

const routes = {
    path: '/',
    component: App,
    indexRoute: {
        component: Login,
    },
    childRoutes: [
        { path: 'login', component: Login },
    ]

}

export default routes
