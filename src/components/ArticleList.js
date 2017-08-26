import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Article from './Article'
import accordion from '../decorators/accordion'

class ArticleList extends Component {
    static propTypes = {
        articles: PropTypes.array,
        // from accordion decorator
        activeItemId: PropTypes.string,
        toggleOpenArticle: PropTypes.func
    };

    static defaultProps = {
        articles: [],
        toggleOpenArticle: () => {}
    };

    state = {
        openArticleId: null
    }

    render() {
        const articleElements = this.props.articles.map(article => (
            <li key={article.id}>
                <Article
                    article={article}
                    isOpen={article.id === this.props.activeItemId}
                    toggleOpen={this.toggleOpenArticle(article.id)}
                />
            </li>
        ))

        return (
            <ul>
                {articleElements}
            </ul>
        )
    }

    toggleOpenArticle = (articleId) => () => {
        this.props.toggle(articleId);
    };

/*
    toggleOpenArticle = (openArticleId) => () => {
        this.setState({ openArticleId })
    }
*/
}

export default accordion(ArticleList);