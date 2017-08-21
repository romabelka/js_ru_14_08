import React, {Component} from 'react'
import Comment from './Comment'

class CommentList extends Component {
    static defaultProps = {
        comments: []
    }

    state = {
        isOpen: false
    }

    render() {
        const text = this.state.isOpen ? 'hide comments' : 'show comments'
        return (
            <div>
                <button onClick={this.toggleOpen}>{text}</button>
                {this.getBody()}
            </div>
        )
    }

    toggleOpen = () => this.setState({
        isOpen: !this.state.isOpen
    })

    getBody() {
        const { comments } = this.props
        if (!this.state.isOpen) return null

        return comments.length ? (
            <ul>
                {comments.map(comment => <li key = {comment.id}><Comment comment = {comment} /></li>)}
            </ul>
        ) : <h3>No comments yet</h3>
    }
}


export default CommentList