import React, {Component} from 'react'
import PropTypes from 'prop-types';
import Article from './Article'
import accordion from '../decorators/accordion'

class ArticleList extends Component {
    static propTypes = {
        articles: PropTypes.arrayOf(PropTypes.object)
    }

    render() {
        const {toggleOpen, openElementId} = this.props
        const articleElements = this.props.articles.map(article => (
            <li key={article.id}>
                <Article
                    article={article}
                    isOpen={article.id === openElementId}
                    toggleOpen={toggleOpen(article.id)}
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