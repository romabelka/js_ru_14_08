import React, {Component, PureComponent} from 'react'
import CommentList from '../CommentList'
import PropTypes from 'prop-types'
import {findDOMNode} from 'react-dom'
import CSSTransion from 'react-addons-css-transition-group'
import './style.css'
import {connect} from 'react-redux'
import {deleteArticle} from '../../AC'

class Article extends PureComponent {
    static propTypes = {
        article: PropTypes.shape({
            id: PropTypes.string,
            title: PropTypes.string.isRequired,
            text: PropTypes.string
        }).isRequired,
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    }

/*
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.isOpen !== nextProps.isOpen
    }
*/

    render() {
        const {article, toggleOpen, deleteArticle} = this.props

        return (
            <div ref={this.setContainerRef}>
                <h3 onClick = {toggleOpen}>{article.title}</h3>
                <button onClick={deleteArticle}>delete me</button>
                <CSSTransion
                    transitionName="article"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}
                    transitionAppearTimeout={500}
                    transitionAppear
                    component="section"
                >
                    {this.getBody()}
                </CSSTransion>
            </div>
        )
    }

    setContainerRef = (container) => {
        console.log('---', container)
        this.container = container
    }

    componentDidUpdate() {
        console.log('---', this.container.getBoundingClientRect())
    }
/*

    deleteComment = () => {
        this.props.article.comments.splice(0,1)
        this.setState({})
    }
*/

    getBody() {
        return this.props.isOpen && (
            <div>
                <p>{this.props.article.text}</p>
                <CommentList comments = {this.props.article.comments} ref = {this.setCommentsRef} />
            </div>
        )
    }

    setCommentsRef = (commentsRef) => {
        this.commentsRef = commentsRef
        console.log('---', findDOMNode(commentsRef))
//        commentsRef.forceUpdate()
/*
        setTimeout(() => {
            commentsRef.setState({
                isOpen: true
            })
        }, 500)
*/
    }

/*
    handleDelete = () => {
        const {deleteArticle, article} = this.props
        deleteArticle(article.id)
    }
*/
}

export default connect(null, (dispatch, ownProps) => ({
    deleteArticle: () => dispatch(deleteArticle(ownProps.article.id))
}))(Article)

//export default connect(null, { deleteArticle })(Article)