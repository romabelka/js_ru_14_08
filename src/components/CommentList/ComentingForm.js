import React, {Component} from 'react'

export default class ComentingForm extends Component {
    state = {
      user: "",
      comment: ""
    }
    render() {
      console.log(this.stage)
      return (
        <form>
          <input type='text' value={this.state.user} name='user' placeholder='user' onChange={this.setValue} />
          <br />
          <textarea type='text' value={this.state.comment} name='comment' placeholder='comment' onChange={this.setValue} />
          <br />
          <input type='submit' onClick={this.addComment} value='Add comment' />
        </form>
      )
    }

    addComment = (e) => {
      console.log(e.target.value);
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
