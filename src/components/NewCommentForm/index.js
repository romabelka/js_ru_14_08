import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './style.css'


class NewCommentForm extends Component {

    state = {
        username: null,
        text: null,
        userInputStatus : null,
        textInputStatus : null
    };

    render() {
        return (
            <div>
                <label>Username: </label>
                <br/>
                <input type="text" className={this.state.userInputStatus} value={this.state.username}/>
                <br/>
                <label>Text: </label>
                <br/>
                <input type="text" className={this.state.textInputStatus} value={this.state.text}/>
                <br/>
                <input type="submit" value="post"/>
            </div>
        );
    }

    handleUserNameChange = ev => {

    };

    handleTextChange = ev => {

    };

    handleSubmit = ev => {

    };
}

export default NewCommentForm;
