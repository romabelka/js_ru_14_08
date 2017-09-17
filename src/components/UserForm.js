import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Datepicker from './Datepicker';

class UserForm extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                <Datepicker />
                <label>Username: </label>
                <input type="text" value={this.props.value} onChange={this.handleChange}/>
            </div>
        )
    }

    handleChange = ev => {
        this.props.onChange(ev.target.value)
    }

}

export default UserForm
