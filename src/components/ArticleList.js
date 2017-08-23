import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Article from './Article'
import toggleAccordion from '../decorators/toggleAccordion'

class ArticleList extends Component {
    static propTypes = {
        comments: PropTypes.array
    }


    render() {
        const {toggleOpenArticle} = this.props
        const articleElements = this.props.articles.map(article => (
            <li key={article.id}>
                <Article
                    article={article}
                    isOpen={article.id === this.props.openArticleId}
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

export default toggleAccordion(ArticleList)