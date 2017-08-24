import React, {Component} from 'react';
import PropTypes from 'prop-types'

class Comment extends Component {
  
  static propTypes = {
      user: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
  }

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
