import React from 'react'
import { connect } from 'react-redux'

import { login } from 'actions/auth'
require('style.scss')

class Login extends React.Component {
    constructor(props, context) {
        super(props, context)
        // this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault()
        const { dispatch } = this.props
        let username = this._username.value
        let password = this._password.value
        dispatch(login(username, password, '/'))

    }

    render() {
        return (
            <div className="form">
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className="form-group">
                        <input type="text" ref={(node) => this._username = node } className="form-control"/>
                        <input type="password" ref={(node) => this._password = node} className="form-control"/>
                        <input type="submit" value="Login" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        auth: state.user
    }
}

export default connect(mapStateToProps)(Login)
