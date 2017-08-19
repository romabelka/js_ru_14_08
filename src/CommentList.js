import React, {Component} from 'react'
import Comment from './Comment'

class CommentList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      commentsSwitch: false
    }
  }

  render() {
    var commentsArray = this.props.comments;

    return (
      <div>
        {this.getArrayComments()}
        <button onClick = {this.switchStateComments}>
          {this.getTextForSwitchButton()}
        </button>
      </div>
    )
  }

  switchStateComments = () => {
    this.setState({
        commentsSwitch: !this.state.commentsSwitch
    })
  }

  getArrayComments = () => {
      return this.state.commentsSwitch && <ul>{this.getComments(this.props.comments)}</ul>
  }

  getTextForSwitchButton(){
    const textButton = this.state.commentsSwitch ?  "Hide comments" : "Show comments"
    return textButton
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
