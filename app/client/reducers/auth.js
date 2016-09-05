import { AUTH_REQUEST, AUTH_RESPONSE, AUTH_LOGOUT } from 'config/actionTypes'

const initialState = {
    user: null,
    isRequesting: false,
    error: null,
    logginedAt: null
}

export function authReducer(state = initialState, action) {
    switch(action.type) {
        case AUTH_REQUEST:
            return Object.assign({}, state, {
                isRequesting: true
            })

        case AUTH_RESPONSE:
            return Object.assign({}, state, {
                user: action.user,
                error: action.error,
                isRequesting: false,
                logginedAt: new Date()
            })
        case AUTH_LOGOUT:
            return initialState
        default:
            return state
    }
}
