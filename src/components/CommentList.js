import React, {Component} from 'react'
import Comment from './Comment'
import CommentForm from './CommentForm'
import Loader from './Loader'
import toggleOpen from '../decorators/toggleOpen'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {loadCommentsByArticleId} from '../AC'

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
        if (nextProps.isOpen && !this.props.isOpen && !this.props.loaded) nextProps.loadComments()
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
        const { article: {id, comments = []}, isOpen, loading } = this.props
        
        if (!isOpen) return null

        if (loading) return <Loader />

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
    const loading = state.comments.loading.get(ownProps.article.id)

    return {
        loading: (typeof loading == 'undefined' || loading),
        loaded: !!state.comments.loaded.get(ownProps.article.id)
    }
}, (dispatch, ownProps) => ({
    loadComments: () => dispatch(loadCommentsByArticleId(ownProps.article.id))
}))(toggleOpen(CommentList))