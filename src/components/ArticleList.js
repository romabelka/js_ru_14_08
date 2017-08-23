import React, {Component} from 'react'
import Article from './Article'
import PropTypes from 'prop-types'
import accordeonList from '../decorators/accordeonList'

class ArticleList extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired,
        openArticleId: PropTypes.string,
        toggleOpenArticle: PropTypes.func.isRequired
    }

    render() {
        let {toggleOpenArticle, openArticleId} = this.props;
        console.log(this.props);
        const articleElements = this.props.articles.map(article => (
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

export default accordeonList(ArticleList)
