import React, {Component} from 'react'
import Comment from './../Comment'
import CommentForm from './../CommentForm'
import toggleOpen from '../../decorators/toggleOpen'
import PropTypes from 'prop-types'
import './style.css';

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
        const { comments, isOpen } = this.props
        if (!isOpen) return null
        
        return (
            <div>
                {comments.length ? (
                    <ul>
                        {comments.map(comment => <li key = {comment}><Comment comment = {comment} /></li>)}
                    </ul>
                    ) : <h3>No comments yet</h3>}
                <CommentForm />
            </div>
        )
    }
}


export default toggleOpen(CommentList)
