import React, {Component} from 'react';
import Comment from './Comment';
import toggleOpen from '../decorators/toggleOpen';
import PropTypes from 'prop-types';
import FormComments from '../decorators/form-for-comment';

class CommentList extends Component {
  static defaultProps = {
    comments: [],
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func
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
    const {comments, isOpen} = this.props
    if (!isOpen) return null

    return comments.length ? (
        <div className="comments">
          <ul>
            {comments.map(comment => <li key={comment.id}>
              <Comment comment={comment}/></li>)}
          </ul>
          <FormComments/>
        </div>
      ) :
      (
        <div className="comments">
          <h3>No comments yet</h3>
          <FormComments/>
        </div>
      )
  }
}

export default toggleOpen(CommentList)