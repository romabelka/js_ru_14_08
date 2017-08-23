import React, {Component} from 'react'
import Article from './Article'
import accordion from '../decorators/accordion'
import PropTypes from 'prop-types'

class ArticleList extends Component {

    static propTypes = {
      articles: PropTypes.array.isRequired,
      openElemId: PropTypes.string,
      toggleOpenElem: PropTypes.func.isRequired
    }

    render() {
        const articleElements = this.props.articles.map(article => (
            <li key={article.id}>
                <Article
                    article={article}
                    isOpen={article.id === this.props.openElemId}
                    toggleOpen={this.props.toggleOpenElem(article.id)}
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