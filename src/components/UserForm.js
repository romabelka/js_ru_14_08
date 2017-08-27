import React, { Component } from 'react'
import PropTypes from 'prop-types'

class UserForm extends Component {
    static propTypes = {

    };

    state = {
        username: ''
    }

    render() {
        return (
            <div>
                <label>Username: </label>
                <input type="text" value={this.state.username} onChange={this.handleChange}/>
            </div>
        )
    }

    handleChange = ev => {
        if (ev.target.value.length > 15) return this.setState({
            username: ''
        })

        this.setState({
            username: ev.target.value
        })
    }

}

export default UserForm