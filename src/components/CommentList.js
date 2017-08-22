import React, {Component} from 'react'
import Comment from './Comment'

class CommentList extends Component {
    static defaultProps = {
        comments: []
    }

    state = {
        isOpened: false
    }

    handleClick = () => {
        this.setState({
            isOpened: !this.state.isOpened
        })
    }

    renderBody() {
        if (!this.state.isOpened) {
            return null;
        }

        const { comments } = this.props;

        return comments.length ? (
            <ul>
                {comments.map(comment => <li key={comment.id}><Comment comment={comment} /></li>)}
            </ul>
        ) : <h3>No comments yet</h3>
    }

    render() {
        const buttonText = `${this.state.isOpened ? 'Hide' : 'Show'} Comments`

        return (
            <div>
                <button onClick={this.handleClick}>{buttonText}</button>
                {this.renderBody()}
            </div>
        )
    }
}

export default CommentList