import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Article from './Article'
import OneOpen from '../decorators/oneOpen'

class ArticleList extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired,
        /* не обязательно, что бы можно было убрать декаратор */
        openArticleId: PropTypes.oneOfType([
            PropTypes.bool,
            PropTypes.string
        ]),
        /* не обязательно, что бы можно было убрать декаратор */
        toggleOpenArticle: PropTypes.func
    }

    render() {
        const { openArticleId, toggleOpenArticle, articles } = this.props;
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

export default OneOpen(ArticleList)