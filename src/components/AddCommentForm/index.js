import React, { Component } from 'react'
import './style.css'
import PropTypes from 'prop-types'

class AddCommentForm extends Component {
    static propTypes = {

    };

    state = {
        userName: '',
        userText: '',
        userNameValidClass: '',
        userTextValidClass: ''
    }

    render() {
        return (
            <form
                className="comment-form"
                onSubmit={this.handleSubmit}
            >

                <h3>
                    Comment Form
                </h3>

                <div>
                    <label>User:</label>
                    <input
                        name="userName"
                        type="text"
                        value={this.state.userName}
                        onChange={this.handleChange}
                        className={this.state.userNameValidClass}
                    />
                </div>

                <div>
                    <label>Text: </label>
                    <textarea
                        name="userText"
                        value={this.state.userText}
                        onChange={this.handleChange}
                        className={this.state.userTextValidClass}
                    />
                </div>

                <div>
                    <button >
                        Submit
                    </button>
                </div>

            </form>
        )
    }

    handleChange = event => {

        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        let formState = {
            [name]: value
        }

        let validClasses = {
            valid : 'form-field_valid',
            not_valid : 'form-field_not-valid'
        }

        if( name == 'userName' ) {

            if( value.length < 10 || value.length > 20 ) {
                formState.userNameValidClass = validClasses.not_valid
            } else {
                formState.userNameValidClass = validClasses.valid
            }

        } else if( name == 'userText' ) {

            if( value.length < 30 || value.length > 100 ) {
                formState.userTextValidClass = validClasses.not_valid
            } else {
                formState.userTextValidClass = validClasses.valid
            }

        }

        this.setState(formState)

    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({
            userName: '',
            userText: '',
            userNameValidClass: '',
            userTextValidClass: ''
        })
    }

}

export default AddCommentForm