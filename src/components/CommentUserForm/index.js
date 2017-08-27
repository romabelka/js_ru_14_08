import React, {Component} from 'react'
import CSSTransion from 'react-addons-css-transition-group'
import {findDOMNode} from 'react-dom'
import './style.css'

class CommentUserForm extends Component {
    static propTypes = {

    }

    state = {
        username: '',
        usererror: 'error-border',
        message: '',
        messageoneerror: 'error-border',
    }



    render() {

        return (
            <div>
                <label>Username:</label>
                <input className={this.state.usererror} type="text" value={this.state.username} onChange={this.handleChangeUser} />
                <label>Message</label>
                <textarea className={this.state.messageoneerror} name="messageone" placeholder="Сообщение" value={this.state.message} onChange={this.handleChangeMessage}></textarea>
                <input type="submit" value="Send"/>
            </div>
        )
    }


    handleChangeUser = ev => {
       if(ev.target.value.length > 10){
            this.setState({usererror: ''});
        } if (ev.target.value.length > 20) {
            return this.setState({username: 'Допустимый объем 20 символов'});
        }

        this.setState({
            username: ev.target.value,  //объясни как эта штука работает? я не понимаю почему без нее не вводяться символы
        })
    }

    handleChangeMessage = ev => {
        if(ev.target.value.length > 30){
             this.setState({messageoneerror: ''});
        } if (ev.target.value.length > 40) {
            return this.setState({message: 'Допустимый объем 100 символов'}); //как вывести сообщение и остановить правильно?
        }

        this.setState({
            message: ev.target.value,
        })
    }

}

export default CommentUserForm






