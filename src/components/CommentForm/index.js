import React, { Component } from 'react';
import classNames from 'classnames';

import newId from '../../utils/newId';
import './style.css';

export default class CommentForm extends Component {
    state = {
        userName: '',
        text: ''
    };

    fieldsMap = {
        userName: {
            id: newId('userName'),
            minLength: 10,
            maxLength: 20,
            error: false
        },
        text: {
            id: newId('text'),
            minLength: 30,
            maxLength: 100,
            error: false
        }
    };

    validate(name, value) {
        const field = this.fieldsMap[name];
        const length = value.length;

        field.error = false;

        if (!length) {
            return '';
        }

        if (length < field.minLength) {
            field.error = true;
            return value;
        } else if (length > field.maxLength) {
            return this.state[name];
        } else {
            return value;
        }
    }

    handleChange = event => {
        const fieldName = event.target.name;
        this.setState({
            [fieldName]: this.validate(fieldName, event.target.value)
        });
    };

    handleSubmit = () => {
        this.fieldsMap.userName.error = this.fieldsMap.text.error = false;
        this.setState({
            userName: '',
            text: ''
        });
    };

    render() {
        let userNameClasses = classNames({ 'error': this.fieldsMap.userName.error });
        let textClasses = classNames({ 'error': this.fieldsMap.text.error });

        return (
            <div>
                <label htmlFor={this.userNameId}>User:</label><br />
                <input
                    type="text"
                    value={this.state.userName}
                    onChange={this.handleChange}
                    name="userName"
                    id={this.fieldsMap.userName.id}
                    className={userNameClasses}
                />
                <br />
                <label htmlFor={this.textId}>Text:</label><br />
                <textarea
                    value={this.state.text}
                    onChange={this.handleChange}
                    name="text"
                    id={this.fieldsMap.text.id}
                    className={textClasses}
                />
                <br />
                <button onClick={this.handleSubmit}>Submit</button>
            </div>
        );
    }
}