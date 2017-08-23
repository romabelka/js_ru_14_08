import React, {Component} from 'react'
import Article from './Article'
import toggleOpen from '../decorators/toggleOpen'
import PropTypes from 'prop-types'

class ArticleList extends Component {
    static propTypes = {
      articles: PropTypes.array,
      openArticleId: PropTypes.string,
      toggleOpenArticle: PropTypes.func
    }

    render() {
        const { articles, openArticleId, toggleOpenArticle} = this.props
        const articleElements = articles.map(article => (
            <li key={article.id}>
                <Article
                    article={article}
                    isOpen={article.id === openArticleId}
                    toggleOpen={toggleOpenArticle}
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

export default toggleOpen(ArticleList)