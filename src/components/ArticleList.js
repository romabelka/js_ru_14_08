import React, {Component} from 'react'
import Article from './Article'
import toggleOpenArticle from '../decorators/toggleOpenArticle'
import PropTypes from 'prop-types'

class ArticleList extends Component {
    static PropTypes = {
        articles: PropTypes.array.isRequired
    }

    render() {
        const articleElements = this.props.articles.map(article => (
            <li key={article.id}>
                <Article
                    article={article}
                    isOpen={article.id === this.props.openArticleId}
                    toggleOpen={this.props.toggleOpenArticle(article.id)}
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

export default toggleOpenArticle(ArticleList)