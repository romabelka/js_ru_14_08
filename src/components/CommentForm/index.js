import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.css'

class CommentForm extends Component {
    static propTypes = {

    };

    state = {
        username: '',
        comment: ''
    }

    render() {
      const {username, comment} = this.state

      const textareaStyle = comment.length < 30 ? 'error' : 'input'
      const inputStyle = username.length < 10 ? 'error' : 'input'
        return (
            <div className="add-comment">
                <h3>Add new Comment:</h3>
                  <div className="field">
                    <label className="label">Username: </label>
                    <input 
                      type="text"
                      value={this.state.username}
                      onChange={this.handleChange}
                      className={inputStyle}
                      placeholder='Your name'
                    />
                    <p style={{fontSize: '12px', margin: 0}}>Maximum of 20 charts</p>
                  </div>
                  <div className="field">
                    <label className="label">Comment:</label>
                    <textarea 
                      value={this.state.comment}
                      onChange={this.handleChangeComment}
                      rows={4}
                      cols={35}
                      className={textareaStyle}
                      placeholder='You can write your comment in here'
                    />
                    <p style={{fontSize: '12px', margin: 0}}>Maximum of 100 charts</p>
                  </div>
                  <button 
                    onClick={this.resetForm}
                    className="reset">
                    Reset
                  </button>
            </div>
        )
    }

    handleChange = ev => {
        if (ev.target.value.length > 20) return

        this.setState({
            username: ev.target.value
        })
    }

    handleChangeComment = ev => {
      if(ev.target.value.length > 100) return

      this.setState({
        comment: ev.target.value
      })
    }
    
    resetForm = ev =>{
      this.setState({
        username: '',
        comment: '',
      })
      
    }
}

export default CommentForm