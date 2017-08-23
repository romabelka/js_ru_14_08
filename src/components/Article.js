import React, {Component} from 'react'
import CommentList from './CommentList'
import PropTypes from 'prop-types'
import toggleOpen from '../decorators/toggleOpen'

class Article extends Component {
    static propTypes = {
        article: PropTypes.shape({
            id: PropTypes.string.isRequired,
            date: PropTypes.string,
            title: PropTypes.string.isRequired,
            text: PropTypes.string,
            comments: PropTypes.array,
        }).isRequired,
        toggleOpen: PropTypes.func,
        isOpen: PropTypes.bool.isRequired,
    }

    render() {
        const {article, toggleOpen} = this.props

        return (
            <div>
                <h3 onClick = {toggleOpen}>{article.title}</h3>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        return this.props.isOpen && (
            <div>
                <p>{this.props.article.text}</p>
                <CommentList comments = {this.props.article.comments}/>
            </div>
        )
    }
}

export default Article