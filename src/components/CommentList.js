import React, {Component} from 'react'
import Comment from './Comment'
import PropTypes from 'prop-types'
import toggleOpen from '../decorators/toggleOpen'

class CommentList extends Component {
    static propTypes = {
        comments: PropTypes.array.isRequired,
        isOpen: PropTypes.bool.isRequired
    }

    static defaultProps = {
        comments: []
    }

    componentWillMount() {
        //console.log('---', 'mounting comment list')
    }

    componentDidMount() {
        //console.log('---', 'mounted')
    }

    componentWillReceiveProps() {
        //console.log('---', 'updating props')
    }

    componentWillUpdate() {
        //console.log('---', 'updating state or props')
    }

    componentWillUnmount() {
        //console.log('---', 'unmounting')
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

        return comments.length ? (
            <ul>
                {comments.map(comment => <li key = {comment.id}><Comment comment = {comment} /></li>)}
            </ul>
        ) : <h3>No comments yet</h3>
    }
}


export default toggleOpen(CommentList)