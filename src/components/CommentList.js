import React, {Component} from 'react'
import Comment from './Comment'

class CommentList extends Component {
  state = {
      commentsSwitch: false
    }
  static defaultProps = {
    comments: []
  }

  render() {
    const commentsArray = this.props.comments
    const textButton = this.state.commentsSwitch ?  "Hide comments" : "Show comments"
    return (
      <div>
        {this.getComments(this.props.comments)}
        <button onClick = {this.switchStateComments}>
          {textButton}
        </button>
      </div>
    )
  }

  switchStateComments = () => {
    this.setState({
        commentsSwitch: !this.state.commentsSwitch
    })
  }

  getComments(comments){
    if (!this.state.commentsSwitch) return false
    return comments.length > 0 ?
      (<ul>
       {comments.map( comment =>
          <li key={comment.id}>
            <Comment user={comment.user} text={comment.text} />
          </li>)}
      </ul>)
    : <h5><i>No comments yet</i></h5>
    }
}

export default CommentList
