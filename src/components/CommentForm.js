import React, {Component} from 'react'

class CommentForm extends Component {
    state = {
        username: '',
        text: '',
        classErr: "errInput",
        classOk: 'okInput',
        usernameStatus: false,
        textStatus: false
    };

    render() {
        return (
            <div>
                <label>Username: </label>

                <input type="text" value={this.state.username} onChange={this.changeName}/>
                <label>Text: </label>
                <input type="text" value={this.state.text} onChange={this.changeText}/>
                <button onClick={this.clearValue}>Send</button>
            </div>
        )
    }

    changeName = ev => {

        if (ev.target.value.length > 20) return;
        if (ev.target.value.length > 0 && ev.target.value.length < 10) {
            ev.target.classList.remove(this.state.classOk);
            ev.target.classList.add(this.state.classErr);
            this.setState({
                usernameStatus: false
            })
        }
        else if (ev.target.value.length > 10) {
            ev.target.classList.remove(this.state.classErr);
            ev.target.classList.add(this.state.classOk);

            this.setState({
                usernameStatus: true
            });

        }
        this.setState({
            username: ev.target.value
        })
    };

    changeText = ev => {
        if (ev.target.value.length > 100) return;
        if (ev.target.value.length > 0 && ev.target.value.length < 30) {

            ev.target.classList.remove(this.state.classOk);
            ev.target.classList.add(this.state.classErr);

            this.setState({
                textStatus: false
            })

        }
        else if (ev.target.value.length > 30) {
            ev.target.classList.remove(this.state.classErr);
            ev.target.classList.add(this.state.classOk);

            this.setState({
                textStatus: true
            })
        }
        this.setState({
            text: ev.target.value
        })
    };
    clearValue = ev => {
        if (this.state.textStatus  && this.state.usernameStatus) {
            this.setState({
                username: '',
                text: ''
            })
        }

    }

}

export default CommentForm