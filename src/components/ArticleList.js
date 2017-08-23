import React, {Component} from 'react'
import Article from './Article'
import PropTypes from 'prop-types'
import toggleOpen from '../decorators/toggleOpen'

class ArticleList extends Component {

  static propTypes = {
    articles: PropTypes.array,
    isOpen: PropTypes.bool,
    toggleOpenArticle: PropTypes.func,
  };

  render() {
    const {articles, openArticleId, toggleOpenArticle} = this.props;
    const articleElements = articles.map(article => (
      <li key={article.id}>
        <Article
          article={article}
          isOpen={article.id === openArticleId}
          toggleOpen={toggleOpenArticle}
        />
      </li>
    ));

    return (
      <ul>
        {articleElements}
      </ul>
    )
  }

}

export default toggleOpen(ArticleList)