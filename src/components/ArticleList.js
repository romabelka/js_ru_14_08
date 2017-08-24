import React, {Component} from 'react'
import Article from './Article'
import ArticleWrapper from '../decorators/openItemId'
import PropTypes from 'prop-types'

class ArticleList extends Component {
  static propTypes = {
    toggleOpenArticle: PropTypes.func.isRequired,
    openArticleId: PropTypes.string,
  }

    render() {
      const {toggleOpenArticle, id} = this.props
        const articleElements = this.props.articles.map(article => (
            <li key={article.id}>
                <Article
                    article={article}
                    isOpen={article.id === id}
                    toggleOpen={toggleOpenArticle(article.id)}
                />
            </li>
        ))
        return (
            <ul>
                {articleElements}
            </ul>
        )
    }

}

export default ArticleWrapper(ArticleList)