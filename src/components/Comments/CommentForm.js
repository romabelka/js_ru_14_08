import React from 'react';
import PropTypes from 'prop-types'
import './styles.css'

export default class CommentForm extends React.Component {

    //static propTypes = {};

    state = {
        commentAuthor: '',
        commentText: ''
    };

    updateAuthor = e => {
        let target = e.target;
        let author = target.value;
        if (validation(target, author, 10, 5, 'Too long name')) {
            this.setState({commentAuthor: target.value});
        }
    };

    updateCommentText = e => {
        let target = e.target;
        let commentText = target.value;
        if (validation(target, commentText, 30, 100, 'Too long comment')) {
            this.setState({commentText: commentText})
        }
    };

    handleSendComment = e => {
        e.preventDefault();
        this.setState({commentAuthor: '', commentText: ''})
    };

    render() {

        const {commentAuthor, commentText} = this.state;

        return (
            <form type="POST" action="#?_posted">
                <label>
                    Ваше имя:
                    <input
                        type="text"
                        name="author_name"
                        placeholder="Ваше имя"
                        value={commentAuthor}
                        onChange={this.updateAuthor}
                    />
                </label>
                <br/>
                <textarea
                    name="comment_form"
                    id="comment-form"
                    cols="30" rows="4"
                    placeholder="Введите текст"
                    value={commentText}
                    onChange={this.updateCommentText}
                />
                <div className="button-wrapper">
                    <button type="submit" onClick={this.handleSendComment}>Прокомментировать</button>
                </div>
            </form>
        );

    }

}

function validation(target, validationText, min, max, errorMessage) {
    if (validationText.length > max) {
        console.error(errorMessage);
        return false;
    } else if (validationText.length < min) {
        if (!target.classList.contains('__error')) {
            target.classList.add('__error');
        }
        return true;
    } else {
        target.classList.remove('__error');
        return true;
    }
}