import React, {Component} from 'react'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'
import CommentForm from './CommentForm'
import Loader from './Loader'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {loadArticleComments} from '../AC'
import LocalizedText from './LocalizedText'

class CommentList extends Component {
    static defaultProps = {
        article: PropTypes.object.isRequired,
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    }

    static contextTypes = {
        user: PropTypes.string
    }

    componentWillReceiveProps({ isOpen, article, loadArticleComments }) {
        if (!this.props.isOpen && isOpen && !article.commentsLoading && !article.commentsLoaded) {
            loadArticleComments(article.id)
        }
    }

    render() {
        const {isOpen, toggleOpen} = this.props
        const text = isOpen ? 'hide comments' : 'show comments'
        console.log('---', 4)
        return (
            <div>
                <button onClick={toggleOpen}><LocalizedText>{text}</LocalizedText></button>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        const { article: {comments, id, commentsLoading, commentsLoaded}, isOpen } = this.props
        if (!isOpen) return null
        if (commentsLoading) return <Loader />
        if (!commentsLoaded) return null

        const body = comments.length ? (
            <ul>
                {comments.map(id => <li key = {id}><Comment id = {id} /></li>)}
            </ul>
        ) : <h3><LocalizedText>No comments yet</LocalizedText></h3>

        return (
            <div>
                {this.context.user}
                {body}
                <CommentForm articleId = {id} />
            </div>
        )
    }
}


export default connect(null, { loadArticleComments }, null, {pure: false})(toggleOpen(CommentList))