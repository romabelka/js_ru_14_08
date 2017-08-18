import React, {Component} from 'react'
import Comment from './Comment'

class CommentList extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const commentsArray = this.getComments(this.props.comments)
    return (
      <ul>
        {commentsArray}
      </ul>
    )
  }

  getComments(comments){
    if (comments) {
      return comments.map( comment =>
          <li key={comment.id}>
            <Comment user={comment.user} text={comment.text} />
          </li>)
    } else {
        return <h5><i>No Comment</i></h5>
    }
  }
}

export default CommentList
