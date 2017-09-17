import React, { Component } from 'react'
import PropTypes from 'prop-types'
import localization from './../decorators/localization'

class UserForm extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                <label>{this.props.__('Username')}: </label>
                <input type="text" value={this.props.value} onChange={this.handleChange}/>
            </div>
        )
    }

    handleChange = ev => {
        this.props.onChange(ev.target.value)
    }

}

export default localization(UserForm)