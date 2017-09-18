import React, {Component, PureComponent} from 'react'
import CommentList from '../CommentList'
import Loader from '../Loader'
import LocalizedText from '../LocalizedText'
import PropTypes from 'prop-types'
import {findDOMNode} from 'react-dom'
import CSSTransion from 'react-addons-css-transition-group'
import './style.css'
import {connect} from 'react-redux'
import {deleteArticle, loadArticleById} from '../../AC'

class Article extends Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
        article: PropTypes.shape({
            id: PropTypes.string,
            title: PropTypes.string.isRequired,
            text: PropTypes.string
        }),
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    }

    componentDidMount() {
        const {isOpen, loadArticle} = this.props
        if (isOpen) loadArticle()
    }

/*
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.isOpen !== nextProps.isOpen
    }
*/

    render() {
        const {article, toggleOpen, deleteArticle} = this.props
        console.log('---', 3)
        if (!article) return null

        return (
            <div ref={this.setContainerRef}>
                <h3 onClick = {toggleOpen}>{article.title}</h3>
                <button onClick={deleteArticle}>
                    <LocalizedText>delete me</LocalizedText>
                </button>
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
        const {article, isOpen} = this.props
        if (!isOpen) return null

        if (article.loading) return <Loader />

        return (
            <div>
                <p>{this.props.article.text}</p>
                <CommentList article = {this.props.article} ref = {this.setCommentsRef} />
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

export default connect((state, props) => ({
    article: state.articles.entities.get(props.id)
}), (dispatch, ownProps) => ({
    deleteArticle: () => dispatch(deleteArticle(ownProps.id)),
    loadArticle: () => dispatch(loadArticleById(ownProps.id))
}), null, {pure: false})(Article)

//export default connect(null, { deleteArticle })(Article)