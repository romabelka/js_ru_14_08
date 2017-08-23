import React, {Component} from 'react'
import Article from './Article'
import accordion from './../decorators/accordion.js'

class ArticleList extends Component {

    render() {
        const articleElements = this.props.articles.map(article => {

            return <li key={article.id}>
                <Article
                    article={article}
                    isOpen={article.id === this.props.openArticleId}
                    toggleOpen={this.props.toggleOpenArticle(article.id)}
                />
            </li>
        });

        return (
            <ul>
                {articleElements}
            </ul>
        )
    }
}

export default accordion(ArticleList)