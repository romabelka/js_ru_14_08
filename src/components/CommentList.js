import React, {Component} from 'react'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'
import CommentForm from './CommentForm'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {loadComments} from '../AC'
import {articleCommentsSelector} from '../selectors'

class CommentList extends Component {
    static defaultProps = {
        article: PropTypes.object.isRequired,
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.isOpen && !this.props.isOpen) {
            nextProps.loadComments(nextProps.article.id)
        }
    }

    render() {
        const {isOpen, toggleOpen} = this.props
        const text = isOpen ? 'hide comments' : 'show comments'
        return (
            <div>
                <button onClick={toggleOpen}>{text}</button>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        const { article: {id}, isOpen, comments, loading } = this.props
        if (!isOpen) return null
        if (loading) return <span>Loading...</span>

        const body = comments.length ? (
            <ul>
                {comments.map(comment => <li key = {comment.id}><Comment comment = {comment} /></li>)}
            </ul>
        ) : <h3>No comments yet</h3>

        return (
            <div>
                {body}
                <CommentForm articleId = {id} />
            </div>
        )
    }
}


export default connect((state, ownProps) => ({
    comments: articleCommentsSelector(state, ownProps),
    loading: state.comments.loading
}), { loadComments })(toggleOpen(CommentList))