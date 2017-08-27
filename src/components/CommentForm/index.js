import React, { Component } from 'react'
import './style.css'

class CommentForm extends Component {
	state = {
        textInputClass: 'invalid',
        userNameInputClass: 'invalid',
    }

	render() {
        return (
            <div>
                <label>Username: </label>
                <input 
                    className={this.state.userNameInputClass} 
                    name="username" 
                    type="text" 
                    onChange={this.handleUserNameChange}
                />
                <label>Text: </label>
                <input 
                    className={this.state.textInputClass} 
                    name="text" 
                    type="text" 
                    onChange={this.handleTextChange}
                />
            </div>
        )
    }

    handleUserNameChange = ev => {
    	if (
    		ev.target.value.length < 10 ||
    		ev.target.value.length > 20
    	) {
    		return this.setState({
            	userNameInputClass: 'invalid'
        	})
    	}

        this.setState({
            userNameInputClass: 'valid'
        })
    }

    handleTextChange = ev => {

    	if (
    		ev.target.value.length < 30 ||
    		ev.target.value.length > 100
    	) {
    		return this.setState({
            	textInputClass: 'invalid'
        	})
    	}

    	this.setState({
            textInputClass: 'valid'
        })
    }
}

export default CommentForm