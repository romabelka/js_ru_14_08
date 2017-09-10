import React, {Component} from 'react'
import Comment from './Comment'
import Loader from './Loader'
import toggleOpen from '../decorators/toggleOpen'
import CommentForm from './CommentForm'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {loadCommentForArticle} from '../AC'

class CommentList extends Component {
    static defaultProps = {
        article: PropTypes.object.isRequired,
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
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

    componentWillReceiveProps(nextProps) {
        const {loadCommentForArticle, article: {id}, loaded} = nextProps
        if (!loaded) loadCommentForArticle(id)
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
        const { id, isOpen, comments, loading } = this.props

        if (loading) return <Loader/>

        if (!isOpen) return null


        const body = comments.length ? (
            <ul>
                {comments.map(id => <li key = {id}><Comment id = {id} /></li>)}
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

export default connect((state, ownProps) => {
    const {id, comments} = ownProps.article
    const {commentsLoading: loading, commentsLoaded: loaded} = state.articles.entities.get(id)
    return {
        id,
        comments,
        loading,
        loaded
    }
}, {loadCommentForArticle})(toggleOpen(CommentList))