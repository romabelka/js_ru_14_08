import React, {Component} from 'react'

export default class ComentingForm extends Component {
    state = {
      user: "",
      comment: ""
    }

    render() {
      return (
        <form onSubmit={this.addComment}>
          <input type='text' className={this.getClassName('user')} value={this.state.user} name='user' placeholder='user' onChange={this.setValue} />
          <br />
          <textarea type='text' className={this.getClassName('comment')} value={this.state.comment} name='comment' placeholder='comment' onChange={this.setValue} />
          <br />
          <input type='submit' value='Add comment' />
        </form>
      )
    }

    addComment = (e) => {
      e.preventDefault();
      this.setState({
        user: "",
        comment: ""
      })
    }

    getClassName = (type) => {
      return this.state[type].length && this.state[type].length < limits[type].min ? 'red-input' : ''
    }

    setValue = (e) => {
      this.setState({
          [e.target.name]: e.target.value
      })
       if (e.target.value.length > limits[e.target.name].max) {
          this.setState({[e.target.name]: ''})
        }
    }
  }

  const limits = {
      user: {
        min: 10,
        max: 20
      },
      comment: {
        min: 30,
        max: 100
      }
    }
