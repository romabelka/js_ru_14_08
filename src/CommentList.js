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

        const buttonText = this.state.isOpenComments
            ? 'Скрыть комментарии.' : 'Показать комментарии.';

        return (
            <div>
                <a href="" onClick={this.showHideComments.bind(this)}>{buttonText}</a>
                {this.viewCommentList()}
            </div>
        )
    }

    viewCommentList() {

        if (!this.state.isOpenComments) {
            return;
        }

        const {comments} = this.props;

        if (!Array.isArray(comments) || comments.length < 1) {
            return <p>Комментарии отсутствуют</p>
        }

        const commentList = [];

        for (let {id, user, text} of comments) {
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
