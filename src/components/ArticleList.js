import React, {Component} from 'react'
import Article from './Article'
import PropTypes from 'prop-types'
import accordion from '../decorators/accordion'

class ArticleList extends Component {
    static propTypes = {
        articles: PropTypes.arrayOf(PropTypes.object)
    }

    render() {
        const {openArticleId, articles, toggleOpenArticle} = this.props
        const articleElements = articles.map(article => (
            <li key={article.id}>
                <Article
                    article={article}
                    isOpen={article.id === openArticleId}
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

export default accordion(ArticleList)