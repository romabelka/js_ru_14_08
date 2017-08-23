import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Comments extends Component {
  static propTypes = {
    comments: PropTypes.array,
  }
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