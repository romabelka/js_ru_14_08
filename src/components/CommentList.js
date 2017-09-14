import React, {Component} from 'react'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'
import CommentForm from './CommentForm'
import Loader from './Loader'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {loadComments} from '../AC'
import {loadArticleComments} from '../AC'
import {Link} from 'react-router-dom'

class CommentList extends Component {
    

    static defaultProps = {
        article: PropTypes.object.isRequired,
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    }

    // componentWillReceiveProps(props) {
    //     const {loaded, loading, loadComments, pageId} = props
    //     loadComments(5, pageId);
    // }

    componentDidMount() {
        const {loaded, loading, loadComments, pageId} = this.props
        loadComments(5, pageId);
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
        const {comments, total, path} = this.props
        // if (!isOpen) return null
        // if (commentsLoading) return <Loader />
        // if (!commentsLoaded) return null
        
        const body = comments.size ? (
            <div>
                <ul>
                    {comments.map(comment => <li key = {comment.id}><Comment id = {comment.id} /></li>)}
                </ul>

                {this.getPaginator(total)}
            </div>
        ) : <h3>No comments yet</h3>

        return (
            <div>
                {body}
            </div>
        )
    }

    // getPaging = (e) => {
    //     const {loadComments} = this.props
    //     loadComments(5, e.target.text);
    // }

    getPaginator = (total) => {
        const {path} = this.props
        const step = Math.ceil(total / 5);
        let links = new Array()
        let i = 0;
        for (i = 1; i < step+1; i++)
        {
            links.push(<Link to={`${path}/${i}`} key={i}>{i}</Link>)
        }

        return (
            <div>
                <h3>Paging</h3>
                {links} 
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