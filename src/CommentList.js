import React, { Component } from 'react'
import Comment from './Comment'

class CommentList extends Component {

    constructor(props) {

        super(props);

        this.state = {
            isOpenComments: false
        }
    }

    render() {

        return (
            <div>
                {this.getCommentsButton()}
                {this.getCommentsList()}
            </div>
        )
    }

    getCommentsButton() {

        const {comments} = this.props;

        if (!Array.isArray(comments) || comments.length < 1) {
            return <h4>Nothing to show :(</h4>
        }

        const buttonText = this.state.isOpenComments
            ? 'Hide comments' : `Show comments (${comments.length})`;

        return <a href="" onClick={this.showHideComments.bind(this)}>{buttonText}</a>
    }

    getCommentsList() {

        if (!this.state.isOpenComments) {
            return;
        }

        const commentList = [];

        for (let {id, user, text} of this.props.comments) {
            commentList.push(<li key={id}> <Comment user = {user} text = {text}/> </li>)
        }

        return <ul>{commentList}</ul>
    }

    showHideComments(event) {

        event.preventDefault();

        this.setState({
            isOpenComments: !this.state.isOpenComments
        });
    }
}

export default CommentList
