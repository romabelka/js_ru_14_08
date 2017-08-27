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
                <input type="text" value={this.state.userName} onChange={this.handleChange}/>
            </div>
        )
    }

    handleChange = ev => {
        if (ev.target.value.length > 15) return this.setState({
            userName: ''
        });

        this.setState({
            userName: ev.target.value
        })
    }

}

export default UserForm