import React, {Component} from 'react'
import Comment from './Comment'
import CommentForm from './CommentForm/index.js'
import toggleOpen from '../decorators/toggleOpen'
import PropTypes from 'prop-types'

class CommentList extends Component {
    static defaultProps = {
        comments: [],
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    }

    state = {
        additionalComments: []
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

    addNewComment(user, text, id) {

        const additionalComments = this.state.additionalComments;
        additionalComments.push({user, text, id});

        this.setState({additionalComments});

        console.log(additionalComments);
    }

    render() {
        const {isOpen, toggleOpen} = this.props
        const text = isOpen ? 'hide comments' : 'show comments'
        return (
            <div>
                <button onClick={toggleOpen}>{text}</button>
                {this.getBody()}
                {isOpen && <CommentForm submitHandler={this.addNewComment.bind(this)}/>}
            </div>
        )
    }

    getBody() {

        const
            {comments, isOpen} = this.props,
            additionalComments = this.state.additionalComments;

        if (!isOpen) return null;

        return comments.length ? (
            <ul>
                {[].concat(comments, additionalComments).map(
                    comment => <li key={comment.id}><Comment comment={comment}/></li>
                )}
            </ul>
        ) : <h3>No comments yet</h3>
    }
}


export default toggleOpen(CommentList)