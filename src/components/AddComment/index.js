import React, {Component} from 'react'
import './style.css'

export default class AddComment extends Component {
  state = {
    userName: '',
    message: ''
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div className="input-wrap">
          <input type="text" className={this.getClassUserName()} placeholder="Your name" value={this.state.userName} onChange={this.changeUserHandler}/>
        </div>
        <div className="textarea-wrap">
          <textarea placeholder="Your message" className={this.getClassMessage()} value={this.state.message} onChange={this.changeMessageHandler}></textarea>
        </div>
        <div>
          <input type="submit" value="send form"/>
        </div>
      </form>
    )
  }

  changeUserHandler = ev => {
    let val = ev.target.value

    if (val.length > 20) {
      return
    }

    this.setState({
      userName: val
    })
  }

  changeMessageHandler = ev => {
    let val = ev.target.value

    if (val.length > 100) {
      return
    }

    this.setState({
      message: val
    })
  }

  submitHandler = ev => {
    ev.preventDefault()

    this.setState({
      userName: '',
      message: ''
    })
  }

  getClassUserName = () => {
    return (this.state.userName.length > 0 && this.state.userName.length < 10) ? 'error' : ''
  }

  getClassMessage = () => {
    return (this.state.message.length > 0 && this.state.message.length < 30) ? 'error' : ''
  }
}