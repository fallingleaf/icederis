import React from 'react'
import thunk from 'redux-thunk'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { Router, Route, browserHistory } from 'react-router'


import reducer from 'reducers'
import App from 'containers/App'
import rootRoutes from 'routes'

let store = createStore(reducer, applyMiddleware(thunk))

// console.log(rootRoutes)

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={rootRoutes} />
  </Provider>,
  document.getElementById('root')
)
