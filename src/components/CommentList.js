import React, {Component} from 'react'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'

class CommentList extends Component {


  static defaultProps = {
    comments: []
  }

  render() {
    const {comments, isOpen} = this.props
    const textButton = !isOpen ?  "Hide comments" : "Show comments"
    return (
      <div>
        {this.getComments(isOpen)}
        <button onClick = {this.props.handleClick}>
          {textButton}
        </button>
      </div>
    )
  }



  getComments(isOpen){
    const {comments} = this.props
    if (isOpen) return null
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

export default toggleOpen(CommentList);
