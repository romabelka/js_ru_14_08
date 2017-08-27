import React, {Component} from 'react'
import PropTypes from 'prop-types'

class CommentForm extends Component {
    static propTypes = {
        username: PropTypes.string,
        comment: PropTypes.string,
        usernameValid: PropTypes.bool,
        commentValid: PropTypes.bool,
        handleChange: PropTypes.func.isRequired,
        resetForm: PropTypes.func.isRequired
    }

    render() {
        const {
            username,
            comment,
            usernameValid,
            commentValid,
            handleChange,
            resetForm
        } = this.props
        const invalidStyle = {
            borderColor: 'red'
        }
        return (
            <div>
                <div>
                    <label>Username:
                    </label>
                    <input
                        style={usernameValid
                        ? {}
                        : invalidStyle}
                        type="text"
                        name="username"
                        value={username}
                        onChange={handleChange}/>
                </div>
                <div>
                    <label>Comment:
                    </label>
                    <textarea
                        style={commentValid
                        ? {}
                        : invalidStyle}
                        name="comment"
                        value={comment}
                        onChange={handleChange}/>
                </div>
                <button onClick={resetForm}>Submit</button>
            </div>
        )
    }

}

export default CommentForm