import React, {Component} from 'react'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'
import CommentForm from './CommentForm'
import PropTypes from 'prop-types'
import {loadAllComments} from '../AC'
import {connect} from 'react-redux'
import Loader from './Loader';

class CommentList extends Component {
    static defaultProps = {
        article: PropTypes.object.isRequired,
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    }

    componentDidMount() {
        let {loaded, loadAllComments, article} = this.props;
        if (!loaded) {
            loadAllComments(article.id)
        }
    }

    render() {
        const {isOpen, toggleOpen, loading} = this.props
        const text = isOpen ? 'hide comments' : 'show comments'

        if (loading) return <Loader />

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


export default connect(
    state => ({
        loaded: state.comments.loaded,
        loading: state.comments.loading
    }),
    {loadAllComments}
)(toggleOpen(CommentList))
