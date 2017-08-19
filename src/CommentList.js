import React, {Component} from 'react'
import Comment from './Comment'

class CommentList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: true
        }
    }

    render() {
        if (typeof this.props.comments == 'undefined' || this.props.comments.length == 0) {
            return null;
        }

        const commentElements = this.props.comments.map(comment => <li key={comment.id}><Comment comment={comment}/></li>)

        return (
            <div>
                <button onClick = {this.handleButtonClick}>{this.getButtonText()}</button>
                {this.getCommentsList(commentElements)}
            </div>
        )
    }

    handleButtonClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    getButtonText() {
        return (this.state.isOpen) ? 'Hide comments' : 'Show comments'
    }

    getCommentsList(commentElements) {
        return this.state.isOpen && (
            <ul>
                {commentElements}
            </ul>
        )
    }
}

export default CommentList