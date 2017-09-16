import React, { Component } from 'react'
import PropTypes from 'prop-types'

class UserForm extends Component {
    static propTypes = {

    };

<<<<<<< HEAD
    state = {
        username: ''
    }

=======
>>>>>>> romabelka/master
    render() {
        return (
            <div>
                <label>Username: </label>
<<<<<<< HEAD
                <input type="text" value={this.state.username} onChange={this.handleChange}/>
=======
                <input type="text" value={this.props.value} onChange={this.handleChange}/>
>>>>>>> romabelka/master
            </div>
        )
    }

    handleChange = ev => {
<<<<<<< HEAD
        if (ev.target.value.length > 15) return this.setState({
            username: ''
        })

        this.setState({
            username: ev.target.value
        })
=======
        this.props.onChange(ev.target.value)
>>>>>>> romabelka/master
    }

}

export default UserForm