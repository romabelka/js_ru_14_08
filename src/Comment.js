import React, {Component} from 'react';

class Comment extends Component {
  constructor(props) {
      super(props)
  }
  render(){
    const comment = this.props
      return (
          <div>
              <h5>{comment.user}</h5>
              <p> <i>{comment.text}</i></p>
          </div>
      )
  }
}

export default Comment
