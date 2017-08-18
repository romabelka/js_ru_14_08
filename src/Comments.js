import React, { Component } from 'react'

class Comments extends Component {
  constructor(props) {
    super(props)
  }

  getComments() {
    return this.props.comments.map(comment => <li key={comment.id}>{comment.text}</li>)
  }
  render() {

    return (
      <ul>
        {this.getComments()}
      </ul>
    )
  }
}

export default Comments