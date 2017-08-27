import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './style.css'

const MIN_USER_NAME_LENGTH = 10;
const MAX_USER_NAME_LENGTH = 20;

const MIN_TEXT_LENGTH = 30;
const MAX_TEXT_LENGTH = 100;

const ERROR_STATUS = "input_error";
const INIT_STATUS = "input_empty";

class NewCommentForm extends Component {

    state = {
        userName: "",
        text: "",
        userInputStatus : INIT_STATUS,
        textInputStatus : INIT_STATUS
    };

    render() {
        return (
            <div>
                <label>Username: </label>
                <br/>
                <input type="text" className={this.state.userInputStatus}
                       value={this.state.userName}
                       onChange={this.handleUserNameChange}/>
                <br/>
                <label>Text: </label>
                <br/>
                <textarea className={this.state.textInputStatus}
                          value={this.state.text}
                          onChange={this.handleTextChange}/>
                <br/>
                <input type="submit" value="post" onClick={this.handleSubmit}/>
            </div>
        );
    }

    handleUserNameChange = ev => {
        if(ev.target.value.length > MAX_USER_NAME_LENGTH) {
            return;
        }
        let status = ev.target.value.length < MIN_USER_NAME_LENGTH ? ERROR_STATUS : "";
        this.setState({
            userInputStatus : status,
            userName: ev.target.value
        })
    };

    handleTextChange = ev => {
        if(ev.target.value.length > MAX_TEXT_LENGTH) {
            return;
        }
        let status = ev.target.value.length < MIN_TEXT_LENGTH ? ERROR_STATUS : "";
        this.setState({
            textInputStatus : status,
            text: ev.target.value
        })
    };



    handleSubmit = ev => {
        if(this.state.userInputStatus === INIT_STATUS ||
           this.state.textInputStatus === INIT_STATUS) {
            alert("One of fields or both are empty. Please enter some data.");
            return;
        }

        if(this.state.userInputStatus === ERROR_STATUS ||
           this.state.textInputStatus === ERROR_STATUS) {
            alert("Please enter valid data before posting a new comment.");
            return;
        }
        this.setState({
            userName: "",
            text: ""
         })
    };
}

export default NewCommentForm;
