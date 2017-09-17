import React, { Component } from 'react'
import PropTypes from 'prop-types'

class UserForm extends Component {
    static propTypes = {

    };
    static contextTypes = {
        localize: PropTypes.func
    }
    render() {
        return (
            <div>
                <label>{this.context.localize('username')}: </label>
                <input type="text" value={this.props.value} onChange={this.handleChange}/>
            </div>
        )
    }

    handleChange = ev => {
        this.props.onChange(ev.target.value)
    }

}

export default UserForm