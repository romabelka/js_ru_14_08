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
    getPaging = (e) => {
        const {loadComments} = this.props
        loadComments(5, e.target.text);
    }

    static defaultProps = {
        article: PropTypes.object.isRequired,
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    }

    componentDidMount() {
        const {loaded, loading, loadComments} = this.props
        loadComments(5,1);
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
        const {comments, total} = this.props
        // if (!isOpen) return null
        // if (commentsLoading) return <Loader />
        // if (!commentsLoaded) return null
        
        console.log('COMMENTS', this.props);

    
        
        const body = comments.size ? (
            <div>
                <ul>
                    {comments.map(comment => <li key = {comment.id}><Comment id = {comment.id} /></li>)}
                </ul>
                <h3>Paging</h3>
                <a href="#" onClick={this.getPaging.bind(this)}>1</a>
                <a href="#" onClick={this.getPaging.bind(this)}>2</a>
                <a href="#" onClick={this.getPaging.bind(this)}>3</a>
                <a href="#" onClick={this.getPaging.bind(this)}>4</a>
            </div>
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
        comments: state.comments.entities,
        total: state.comments.total
    }
}, {loadComments})(toggleOpen(CommentList))