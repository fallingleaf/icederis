import { AUTH_REQUEST, AUTH_RESPONSE, AUTH_LOGOUT } from 'config/actionTypes'
const $ = require('jquery')

function loginRequest(email, password) {
    return {
        type: AUTH_REQUEST,
        email,
        password
    }
}

function loginResponse(user, error) {
    return {
        type: AUTH_RESPONSE,
        user,
        error
    }
}

function logoutRequest() {
    return {
        type: AUTH_LOGOUT
    }
}

const MOCKUSER = {
    firstName: 'test',
    lastName: 'user',
    email: 'test@icecream.com',
    token: 'vk45Qs@12'
}

export function login(email, password, redirect = '/') {
    console.log(email + ' ' + password)
    return (dispatch) => {
        dispatch(loginRequest(email, password))
        console.log('Request login simulation')
        $.post('/login', {email, password}, function(result) {
            console.log(result)
        })
        setTimeout(500, dispatch(loginResponse(MOCKUSER, {})))
    }
}

export function logout() {
    setTimeout(500, dispatch(logoutRequest()))
}
