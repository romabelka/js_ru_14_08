import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './style.css'

class CommentForm extends Component {
    static propTypes = {};

    static USER_MAX_LENGTH = 20
    static TEXT_MAX_LENGTH = 100

    static USER_MIN_LENGTH = 10
    static TEXT_MIN_LENGTH = 30

    state = {
        user: '',
        text: ''
    }

    handleUserChange = event => {
        const value = event.target.value
        if (value.length < CommentForm.USER_MAX_LENGTH) {
            this.setState({user: value})
        }
    }

    handleTextChange = event => {
        const value = event.target.value

        if (value.length < CommentForm.TEXT_MAX_LENGTH) {
            this.setState({text: event.target.value})
        }
    }


    handleSubmitForm = event => {
        event.preventDefault()
        this.setState({
            user: '',
            text: ''
        });
    }

    hasUserWarning = () => {
        return this.state.user.length < CommentForm.USER_MIN_LENGTH
    }

    hasTextWarning = () => {
        return this.state.text.length < CommentForm.TEXT_MIN_LENGTH
    }

    render() {
        return <div>
            <form onSubmit={this.handleSubmitForm}>
                <input type="text" name="user"
                       value={this.state.user}
                       onChange={this.handleUserChange}
                       className={this.hasUserWarning() ? 'warning' : ''}
                />
                <textarea name="text"
                          value={this.state.text}
                          onChange={this.handleTextChange}
                          className={this.hasTextWarning() ? 'warning' : ''}
                />
                <input type="submit" value="Submit"/>
            </form>
        </div>
    }

}

export default CommentForm