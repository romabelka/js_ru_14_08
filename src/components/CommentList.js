import React, {Component} from 'react'
import Comment from './Comment'
import CommentForm from './CommentForm'
import toggleOpen from '../decorators/toggleOpen'
import newComment from '../decorators/newComment'
import PropTypes from 'prop-types'

class CommentList extends Component {
    static defaultProps = {
        comments: [],
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func,
        //from newComment decorator
        username: PropTypes.string,
        newComment: PropTypes.string,
        usernameValid: PropTypes.bool,
        newCommentValid: PropTypes.bool,
        handleCommentFormChange: PropTypes.func.isRequired,
        resetCommentForm: PropTypes.func.isRequired
    }

    componentDidMount() {
        console.log('---', 'mounted')
    }

    componentWillUnmount() {
        console.log('---', 'unmounting')
    }

    componentDidUpdate() {
        console.log('---', 'updated')
    }

    render() {
        const {isOpen, toggleOpen} = this.props
        const text = isOpen
            ? 'hide comments'
            : 'show comments'
        return (
            <div>
                <button onClick={toggleOpen}>{text}</button>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        const {
            comments,
            isOpen,
            username,
            newComment,
            usernameValid,
            newCommentValid,
            handleCommentFormChange,
            resetCommentForm
        } = this.props
        if (!isOpen) 
            return null

        let commentsList = comments.length
            ? (
                <ul>
                    {comments.map(comment => <li key={comment.id}><Comment comment={comment}/></li>)}
                </ul>
            )
            : <h3>No comments yet</h3>

        return <div>
            {commentsList}
            <CommentForm
                username={username}
                comment={newComment}
                usernameValid={usernameValid}
                commentValid={newCommentValid}
                handleChange={handleCommentFormChange}
                resetForm={resetCommentForm}/>
        </div>
    }
}

export default toggleOpen(newComment(CommentList))