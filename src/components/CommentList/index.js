import React, {Component} from 'react'
import Comment from './Comment'
import ComentingForm from './ComentingForm'
import toggleOpen from '../../decorators/toggleOpen'
import PropTypes from 'prop-types'
import './style.css'

class CommentList extends Component {

    static defaultProps = {
        comments: [],
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    }

    componentDidMount() {
      //  console.log('---', 'mounted')
    }

    componentWillUnmount() {
      //  console.log('---', 'unmounting')
    }

    componentDidUpdate() {
      //  console.log('---', 'updated')
    }

    render() {
        const {isOpen, toggleOpen} = this.props
        const text = isOpen ? 'hide comments' : 'show comments'
        return (
            <div>
                <button onClick={toggleOpen}>{text}</button>
                <ul>
                  {this.getBody()}
                </ul>
                <ComentingForm />
            </div>
        )
    }

    getBody() {
        const { comments, isOpen } = this.props
        if (!isOpen) return null;
        return comments.length ?
                comments.map(comment => <li key = {comment.id}><Comment comment = {comment} /></li>)
         : <li><b>No comments yet</b></li>
    }
}


export default toggleOpen(CommentList)
