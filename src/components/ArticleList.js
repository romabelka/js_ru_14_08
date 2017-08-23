import React, {Component} from 'react'
import Article from './Article'
import accordion from './../decorators/accordion.js'
import PropTypes from 'prop-types'

class ArticleList extends Component {

    static propTypes = {

        articles: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string,
                title: PropTypes.string.isRequired,
                text: PropTypes.string
            })
        ),

        toggleOpenArticle: PropTypes.func.isRequired
    };

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