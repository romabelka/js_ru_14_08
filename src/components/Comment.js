import React, {Component} from 'react';
import PropTypes from 'prop-types'

class Comment extends Component {
  render(){
    const comment = this.props
      return (
          <div>
              <h5>{comment.user}</h5>
              <p><i>{comment.text}</i></p>
          </div>
      )
  }
}

export default Comment
