import React, {Component} from 'react'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'
import CommentForm from './CommentForm'
import Loader from './Loader'
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import {loadComments} from '../AC/index';
import {COMMENTS_ARR} from '../constants';

class CommentList extends Component {
    static defaultProps = {
        article: PropTypes.object.isRequired,
        comments: PropTypes.object,
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    }

    componentWillReceiveProps(nextProps) {
        console.log('–––> ', 'CommentList will recieve props', this.props.article.id);
        !this.props.isOpen && nextProps.isOpen && this.props.loadComments(this.props.article.id);
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
        const {article, article: {id}, comments, comments: {loaded, loading}, isOpen} = this.props
        if (!isOpen) return null

        const body = article.comments.length
            ?
            <ul>
                {article.comments.map(id => <li key={id}><Comment id={id}/></li>)}
            </ul>
            :
            <h3>No comments yet</h3>

        if (loaded === null || loaded === false) {
            return <Loader/>

        } else {
            return (
                <div>
                    {body}
                    <CommentForm articleId={id}/>
                </div>
            )
        }
    }
}


export default connect(
    (state, props) => ({
        article: state.articles.entities.get(props.article.id),
        comments: state.comments
    }),
    {loadComments}
)(toggleOpen(CommentList))