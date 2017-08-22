import React, {Component} from 'react'
import Article from './Article'
import PropTypes from 'prop-types'
import accordionDecorator from '../decorators/accordionDecorator'

class ArticleList extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired,
        openArticleId: PropTypes.string,
        toggleOpenArticle: PropTypes.func.isRequired
    }

    render() {
        console.log('---', this.props)

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

export default accordionDecorator(ArticleList)