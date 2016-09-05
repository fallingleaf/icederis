import React from 'react'

import { connect } from 'react-redux'

class App extends React.Component {
    constructor(props, context) {
        super(props)
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="topnav">
                </div>
                <div className="content">
                    { this.props.children }
                </div>
                <div className="footer">
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps) (App)
