import React, {Component} from 'react'
import './style.css'

export default class CommentForm extends Component {
    defaultValues = {
        user: {
            name: '',
            error: '',
            classname: ''
        },
        comment: {
            value: '',
            error: '',
            classname: ''
        }
    }

    state = this.defaultValues

    render() {
        const { user, comment } = this.state
        return <div>
            <h4>Add new comment:</h4>
            <p>
                <div className="input">Username: 
                    <span className="error">{user.error}</span>
                    <input className={user.classname} type="text" value={user.name} onChange={this.handleInputChange}/>
                </div>
            </p>
            <p className="input">Comment: 
                <span className="error">{comment.error}</span>
                <textarea className={comment.classname} value={comment.value} onChange={this.handleTextAreaChange}></textarea>
            </p>
            <p><button type="submit" value="Add comment" onClick={this.handleSubmitForm}>Add comment</button></p>
        </div>
    }

    handleInputChange = e => {
        const username = e.target.value

        this.setState({
            user: {
                username,
                classname: username.length < 10 ? 'warning' : '',
                error: username.length < 10 ? 'Length is less then 10 symbols' : ''
            }
        })
    }

    handleTextAreaChange = e => {
        const commentValue = e.target.value

        this.setState({
            comment: {
                commentValue,
                classname: commentValue.length < 30 ? 'warning' : '',
                error: commentValue.length < 30 ? 'Length is less then 30 symbols' : ''
            }
        })
    }

    handleSubmitForm = () => {
        const { user, comment } = this.state

        if (user.error || comment.error) {
            return
        }

        this.setState(this.defaultValues)
    }
}
