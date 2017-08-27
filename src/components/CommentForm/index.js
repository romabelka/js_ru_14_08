import React, {Component} from 'react'
import './style.css'

export default class CommentForm extends Component {
    state = {
        username: '',
        text: '',
    }

    render() {
        const {username, text} = this.state;
        const 
            minUser = 10,
            maxUser = 20,
            minText = 30,
            maxText = 100;
        return(
            <div>
                <h4>Post a new comment</h4>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text" 
                        placeholder="user name" 
                        value={username} 
                        onChange={this.handleChange.bind(this, 'username', maxUser)} 
                        className={this.handleClassname(username, minUser)} />
                    <br />
                    <textarea 
                        placeholder="type a comment" 
                        value={this.state.text} 
                        onChange={this.handleChange.bind(this, 'text', maxText)} 
                        className={this.handleClassname(text, minText)} />
                    <br />
                    <button>Submit</button>
                </form>
            </div>
        )
    }

    handleSubmit = ev => {
        ev.preventDefault();
        this.setState({
            username: '',
            text: '',
        })
    }

    handleClassname(value, base) {
        if(value.length && value.length < base) {
            return 'error';
        }
        return "";
    }

    handleChange = (stateName, maxlen, ev) => {
        if (ev.target.value.length > maxlen) {
            return;
        }

        this.setState({
            [stateName]: ev.target.value
        })
    }
}