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
        const comments = this.props
        return (
            <div>
                <button onClick={this.handleClick}>{this.getButton()} comments</button>
                {this.getBody()}
            </div>
        )
    }

    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    getButton() {
        return (this.state.isOpen) ? 'Close' : 'Open'
    }

    getBody() {
        if (this.state.isOpen) {
            const CommentElement = this.props.comments.map(comment => <li key={comment.id}><Comment comment={comment} /></li>)
            return (
                <ul>
                    {CommentElement}
                </ul>
            )
        } else {
            return ('')
        }
    }

}

export default CommentList