import React, { Component, PureComponent} from 'react'
import PropTypes from 'prop-types'
import './style.css'

class CommentForm extends PureComponent {
    static propTypes = {

    };

    state = {
        username: '',
        usernameError: false,
        usercomment: '',
        usercommentError: false
    }

    render() {
        return (
            <div>
                <form>
                    <div>
                        <div><label>Username: </label></div>
                        <input type="text" className={this.state.usernameError&&"error"} name="username" value={this.state.username} onChange={this.handleChangeName}/>
                    </div>

                    <div>
                        <div><label>CommentText: </label></div>
                        <textarea type="text" className={this.state.usercommentError&&"error"} name="usercomment" onChange={this.handleChangeText} value={this.state.usercomment}/>
                    </div>

                    <input type="submit" onClick={this.checkSubmit}/>
                </form>
            </div>
        )
    }

    handleChangeName = ev => {

        if (ev.target.value.length < 10) 
            this.setState({usernameError:true})
        else    
            this.setState({usernameError:false})

        if (ev.target.value.length > 20) return this.setState({
            username: ''
        })

        this.setState({
            username: ev.target.value
        })
    }

    handleChangeText = ev => {
        if (ev.target.value.length < 30) 
            this.setState({usercommentError:true})
        else    
            this.setState({usercommentError:false})

        if (ev.target.value.length > 100) return this.setState({
            usercomment: ''
        })

        this.setState({
            usercomment: ev.target.value
        })
    }

    checkSubmit = ev => {
        ev.preventDefault();
        this.setState({
            username: '',
            usernameError: false,
            usercomment: '',
            usercommentError: false
        })
    }

}

export default CommentForm