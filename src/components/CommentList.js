import React, {Component} from 'react'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'
import CommentForm from './CommentForm'
import Loader from './Loader'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {loadComments} from '../AC'
import {loadArticleComments} from '../AC'

class CommentList extends Component {
    static defaultProps = {
        article: PropTypes.object.isRequired,
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    }

    componentDidMount() {
        const {loaded, loading, loadComments} = this.props
        loadComments(5,5);
    }

    render() {
        console.log('WHAT what is our state', this.props);
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
        const {comments} = this.props
        // if (!isOpen) return null
        // if (commentsLoading) return <Loader />
        // if (!commentsLoaded) return null
        
        console.log('COMMENTS', this.props);

    
        
        const body = comments.size() ? (
            <ul>
                {comments.map(comment => <li key = {comment.id}><Comment id = {comment.id} /></li>)}
            </ul>
        ) : <h3>No comments yet</h3>

        return (
            <div>
                {body}
            </div>
        )
    }
}


export default connect(state=> {
    return {    
        comments: state.comments.entities
    }
}, { loadComments })(toggleOpen(CommentList))