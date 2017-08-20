import React, {Component} from 'react'
import Comment from './Comment'

class CommentList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpened: false
        }
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

        const commentElements = this.props.comments.map(comment => {
            return <li key={comment.id}><Comment comment={comment} /></li>
        })

        return (
            <ul>
                {commentElements}
            </ul>
        )
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