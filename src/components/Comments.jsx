import React, { Component } from 'react';

class Comments extends Component {
  render(){
    const { comments } = this.props;
    return(
      <ul>
        { comments && comments.map(comment => <li key={comment.id}>{comment.text}</li>) }
      </ul>
    )
  }
}

export default Comments