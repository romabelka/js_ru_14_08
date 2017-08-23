import React, {Component, PropTypes} from 'react'
import Article from './Article'
import toggleOpenElement from '../decorators/toggleOpenElement'

class ArticleList extends Component {
    static propTypes = {
      articles: PropTypes.array.isRequired
    }
    render() {
        const {articles, toggleOpenElement, openElementId} = this.props
        const articleElements = articles.map(article => (
            <li key={article.id}>
                <Article
                    article={article}
                    isOpen={article.id === openElementId}
                    toggleOpen={toggleOpenElement(article.id)}
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

export default toggleOpenElement(ArticleList)