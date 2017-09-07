import React, {Component} from 'react'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'
import CommentForm from './CommentForm'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class CommentList extends Component {
    static defaultProps = {
        comments: [],
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
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
        //console.log('---props----', this.props);
        const {isOpen } = this.props
        let comments = this.props.comments;

        

        //if (!isOpen) return null
        console.log('---props----', Object.keys(comments));
        const body = Object.keys(comments).length ? (
            <ul>
                {Object.keys(comments).forEach(id => <li key = {comments[id].id}><Comment id = {comments[id].id} /></li>)}
            </ul>
        ) : <h3>No comments yet</h3>

        return (
            <div>
                {body}
                <CommentForm articleId/>
            </div>
        )
    }
}


export default connect(state => ({
    comments: state.comments    
}))(toggleOpen(CommentList))