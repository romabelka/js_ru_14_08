import React, {Component} from 'react'
import PropTypes from 'prop-types'

class CommentForm extends Component {
    static propTypes = {
        username: PropTypes.string,
        comment: PropTypes.string,
        usernameValid: PropTypes.bool,
        commentValid: PropTypes.bool
    }

    state = {
        username: '',
        comment: '',
        usernameValid: true,
        commentValid: true
    }

    render() {
        const invalidStyle = {
            borderColor: 'red'
        }
        return (
            <div>
                <div>
                    <label>Username:
                    </label>
                    <input
                        style={this.state.usernameValid
                        ? {}
                        : invalidStyle}
                        type="text"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleChange}/>
                </div>
                <div>
                    <label>Comment:
                    </label>
                    <textarea
                        style={this.state.commentValid
                        ? {}
                        : invalidStyle}
                        name="comment"
                        value={this.state.comment}
                        onChange={this.handleChange}/>
                </div>
                <button onClick={this.resetForm}>Submit</button>
            </div>
        )
    }
    handleChange = event => {
        const allowedInputs = {
                username(length) {
                    return length <= 20
                },
                comment(length) {
                    return length <= 100
                },
                usernameValid(length) {
                    return length >= 10
                },
                commentValid(length) {
                    return length >= 30
                }
            }
            let length = event.target.value.length,
                name = event.target.name
            if (!allowedInputs[name](length)) 
                return false;
            let valid = allowedInputs[name + 'Valid'](length)
            this.setState({
                [name]: event.target.value,
                [name + 'Valid']: valid
            })
        }

        resetForm = event => {
            this.setState({username: '', comment: '', usernameValid: true, commentValid: true})
        }
    }

    export default CommentForm