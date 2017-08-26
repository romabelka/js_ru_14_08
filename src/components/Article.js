import React, {Component} from 'react'
import PropTypes from 'prop-types'
import CommentList from './CommentList'
import toggleOpen from '../decorators/toggleOpen'

class Article extends Component {

  static propTypes = {
        article: PropTypes.shape({
            id: PropTypes.string,
            title: PropTypes.string.isRequired,
            text: PropTypes.string
        }).isRequired,
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    }

    render() {
      console.log('----');

        const {article, isOpen, toggleOpen} = this.props
        return (
            <div>
                <h3 onClick = {toggleOpen}>{article.title}</h3>
                  {this.getBody()}
                  <CommentList comments = {article.comments}/>
            </div>
        )
    }

    getBody() {
        const {article, isOpen} = this.props
        return isOpen && <p>{this.props.article.text}</p>
    }
}

export default Article;
