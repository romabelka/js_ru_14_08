import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './style.css'

const MIN_USER_NAME_LENGTH = 10;
const MAX_USER_NAME_LENGTH = 20;

const MIN_TEXT_LENGTH = 30;
const MAX_TEXT_LENGTH = 100;

class NewCommentForm extends Component {

    state = {
        username: "",
        text: "",
        userInputStatus : "",
        textInputStatus : ""
    };

    render() {
        return (
            <div>
                <label htmlFor="userName" >Username: </label>
                <br/>
                <input id="userName" type="text" className={this.state.userInputStatus}
                       value={this.state.username}
                       onChange={this.handleUserNameChange}/>
                <br/>
                <label>Text: </label>
                <br/>
                <textarea className={this.state.textInputStatus}
                          value={this.state.text}
                          onChange={this.handleTextChange}/>
                <br/>
                <input type="submit" value="post"/>
            </div>
        );
    }

    handleUserNameChange = ev => {
        if(ev.target.value.length > MAX_USER_NAME_LENGTH) {
            return;
        }
        let status = ev.target.value.length < MIN_USER_NAME_LENGTH ? "input_error" : "";
        this.setState({
            userInputStatus : status,
            username: ev.target.value
        })
    };

    handleTextChange = ev => {
        if(ev.target.value.length > MAX_TEXT_LENGTH) {
            return;
        }
        let status = ev.target.value.length < MIN_TEXT_LENGTH ? "input_error" : "";
        this.setState({
            textInputStatus : status,
            text: ev.target.value
        })
    };



    handleSubmit = ev => {

    };
}

export default NewCommentForm;
