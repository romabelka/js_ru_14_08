import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {v1} from 'uuid'

import './style.css'

class CommentForm extends PureComponent {

    static propTypes = {
        submitHandler: PropTypes.func.isRequired,
    };

    state = {
        user: {
            isValid: false,
            value: null
        },
        text: {
            isValid: false,
            value: null
        }
    };

    onChangeUserName(event) {

        event.preventDefault();

        const inputValue = event.target.value;
        this.setState({
            user: {
                isValid: typeof inputValue === 'string' && inputValue.length >= 10 && inputValue.length <= 20,
                value: inputValue
            }
        });
    }

    onChangeComment(event) {

        event.preventDefault();

        const inputValue = event.target.value;
        this.setState({
            text: {
                isValid: typeof inputValue === 'string' && inputValue.length >= 30 && inputValue.length <= 100,
                value: inputValue
            }
        });
    }

    onSubmit(event) {

        event.preventDefault();

        const {user, text} = this.state;

        if (user.isValid !== true || text.isValid !== true) {
            return;
        }

        // v1() - сделанно для имитации идентификатора
        // на этом месте должен быть запрос к серверу на добавление комментария и получение в ответ идентификатора
        this.props.submitHandler(user.value, text.value, v1());

        this.setState({
            user: {
                isValid: false,
                value: null
            },
            text: {
                isValid: false,
                value: null
            }
        });
    }

    render() {

        const
            userInputClasses = this.state.user.value && !this.state.user.isValid ?
                'error' : '',
            textInputClasses = this.state.text.value && !this.state.text.isValid ?
                'error' : '';

        return <div>
            <h3>Add new comment</h3>
            <div className="input-line">
                <label>Username:</label>
                <input type="text" placeholder="username" value={this.state.user.value || ''}
                       className={userInputClasses} onChange={this.onChangeUserName.bind(this)}/>
            </div>
            <div className="input-line">
                <label>Comment:</label>
                <textarea rows="4" placeholder="comment" value={this.state.text.value || ''}
                       className={textInputClasses} onChange={this.onChangeComment.bind(this)}/>
            </div>
            <div className="input-line">
                <input type="submit" value="addComment" onClick={this.onSubmit.bind(this)}/>
            </div>
        </div>
    }
}

export default CommentForm