import React, {Component} from 'react'
import './style.css'

class CommentUserForm extends Component {
    static propTypes = {

    };

    state = {
        username: '',
        usererror: '',
        message: '',
        messageoneerror: '',
    };



    render() {

        return (
            <div>
                <label>Username:</label>
                <input className={this.state.usererror} type="text" value={this.state.username} onChange={this.handleChangeUser} />
                <label>Message</label>
                <textarea className={this.state.messageoneerror} name="messageone" placeholder="Сообщение" value={this.state.message} onChange={this.handleChangeMessage}></textarea>
                <input type="submit" value="Send" onClick = {this.clearForm}/>
            </div>
        )
    }


    handleChangeUser = ev => {
       if (ev.target.value.length < 10){
            this.setState({usererror: 'error-border'});
        } if (ev.target.value.length > 10){
            this.setState({usererror: ''});
        }if (ev.target.value.length > 20) {
            return false;
        }

        this.setState({
            username: ev.target.value,  //объясни как эта штука работает? я не понимаю почему без нее не вводяться символы
        })
    }

    handleChangeMessage = ev => {
        if(ev.target.value.length < 30){
            this.setState({messageoneerror: 'error-border'});
        } if(ev.target.value.length > 30){
             this.setState({messageoneerror: ''});
        } if (ev.target.value.length > 100) {
            return false;
        }

        this.setState({
            message: ev.target.value,
        })
    }

    clearForm = () => {
        this.setState({
            username: '',
            usererror: '',
            message: '',
            messageoneerror: '',
        })
    }



}

export default CommentUserForm






