import React, {Component} from 'react'
import './style.css'

class AddCommentForm extends Component {
    state = {
        username: '',
        usernameHasError: false,
        text: '',
        textHasError: false
    }

    render() {
        return (
            <div className="add-comment-form">
                <div className="add-comment-form-row">
                    <label>Username: </label>
                    <input type="text" value={this.state.username} className={this.state.usernameHasError ? 'error' : ''} onChange={this.handleUsernameChange}/>
                </div>
                <div className="add-comment-form-row">
                    <label>Text: </label>
                    <textarea value={this.state.text} className={this.state.textHasError ? 'error' : ''} onChange={this.handleTextChange}></textarea>
                </div>
                <div className="add-comment-form-row">
                    <button onClick={this.handleSubmitClick}>Add new comment</button>
                </div>
            </div>
        )
    }

    handleUsernameChange = ev => {
        if (ev.target.value.length > 20) return

        this.setState({
            username: ev.target.value,
            usernameHasError: (ev.target.value.length < 10) ? true : false
        })
    }

    handleTextChange = ev => {
        if (ev.target.value.length > 100) return

        this.setState({
            text: ev.target.value,
            textHasError: (ev.target.value.length < 30) ? true : false
        })
    }

    handleSubmitClick = () => {
        if (this.state.usernameHasError || this.state.textHasError || !this.state.username || !this.state.text) {
            alert('Incorrect comment!')
            return
        }

        this.setState({
            username: '',
            usernameHasError: false,
            text: '',
            textHasError: false
        })
    }
}

export default AddCommentForm