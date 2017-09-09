import React, {Component} from 'react'
import Comment from './Comment'
import Loader from './Loader'
import toggleOpen from '../decorators/toggleOpen'
import CommentForm from './CommentForm'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {loadAllComments} from '../AC'

class CommentList extends Component {
    static defaultProps = {
        article: PropTypes.object.isRequired,
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    }

    componentDidMount() {
        console.log('---', 'mounted')
        //this.props.loadAllComments(this.props.articleId)
    }

    componentWillUnmount() {
        console.log('---', 'unmounting')
    }

    componentDidUpdate() {
        console.log('---', 'updated')
    }
    componentWillReceiveProps(nextProps) {
        if(this.props.comments.length) return
        if (nextProps.isOpen && !this.props.isOpen) nextProps.loadAllComments(this.props.articleId)
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
        const { articleId, comments, isOpen, loading } = this.props
        if (!isOpen) return null
        if (loading) return <Loader/>
        const body = comments.length ? (
            <ul>
                {comments.map(comment => <li key = {comment.id}><Comment id = {comment.id} /></li>)}
            </ul>
        ) : <h3>No comments yet</h3>

        return (
            <div>
                {body}
                <CommentForm articleId = {articleId} />
            </div>
        )
    }
}


export default connect(state => {

    return {
        comments: state.comments.entities.valueSeq().toArray(),
        loading: state.comments.loading
    }
}, {loadAllComments})(toggleOpen(CommentList))