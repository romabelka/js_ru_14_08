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
            <div>
                {this.getButton()}
                {this.getComments()}
            </div>
        )
    }

    handleOpenCloseClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    getButton(){
        return this.props.comments && <button onClick={this.handleOpenCloseClick}>{!this.state.isOpen ? "Open": "Close"}</button>
    }

    getComments() {
        console.log(this.props)

        if (!this.props.comments) return;

        const commentsElement = this.props.comments.map(comment => <li key={comment.id}><Comment comment={comment}/></li>)
        return this.state.isOpen && <ul>{commentsElement}</ul>
    }

}

export default CommentList
