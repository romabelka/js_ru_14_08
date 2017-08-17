import React, {Component} from 'react'
import Comment from './Comment'

class CommentList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: false
        }
    }

    render() {
      return (
          this.props.comments !== undefined && 
          <div>
            <div><button onClick={this.toggleComments}>{this.state.isOpen ? 'hide' : 'show'} comments ({this.props.comments.length})</button></div>
            <div style={{ marginTop: 15 }}>{this.getCommentsList()}</div>
          </div>
      )
    }

    toggleComments = () => this.setState({ isOpen: !this.state.isOpen })

    getComments() {
      return this.props.comments && this.props.comments.map(comment => <li key={comment.id}><Comment comment={comment}/></li>)
    }

    getCommentsList() {
      return this.state.isOpen && <ul>{this.getComments()}</ul>
    }
}

export default CommentList