import React, {Component} from 'react'
import Article from './Article'
import PropTypes from 'prop-types'
import accordion from '../decorators/accordion'

class ArticleList extends Component {

    static propTypes = {
        articles: PropTypes.array.isRequired,
        accordionStatus: PropTypes.bool.isRequired,
        toggleOpenArticle: PropTypes.func.isRequired,
        openArticleId: PropTypes.string
    }
    
    render() {
      const articleElements = this.props.articles.map(article =>
        <li key={article.id}>
          <Article
            article={article}
            isOpen = {(article.id === this.props.openArticleId) && this.props.accordionStatus}
            toggleOpen = {this.props.toggleOpenArticle(article.id)}
            />
        </li>)
      return (
          <ul>
              {articleElements}
          </ul>
      );
    }
}

export default accordion(ArticleList)
