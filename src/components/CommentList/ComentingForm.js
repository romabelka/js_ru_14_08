import React, {Component} from 'react'

export default class ComentingForm extends Component {
    state = {
      user: "",
      comment: ""
    }
    render() {
      return (
        <form onSubmit={this.addComment}>
          <input type='text' value={this.state.user} name='user' placeholder='user' onChange={this.setValue} />
          <br />
          <textarea type='text' value={this.state.comment} name='comment' placeholder='comment' onChange={this.setValue} />
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

    setValue = (e) => {
      this.setState({
          [e.target.name]: e.target.value
      })
      let [maxColorInput, maxInput] = (e.target.name === 'user') ? [10, 20]
                                    : (e.target.name === 'comment') ? [30, 100]
                                    : 'Error'
        if (e.target.value.length > maxColorInput) {
          e.target.className = "red-input";
        }
        else if (e.target.value.length > maxInput) {
          this.setState({[e.target.name]: ''})
        }
    }
}
