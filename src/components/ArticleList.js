import React, {Component} from 'react'
import Article from './Article'
import PropTypes from 'prop-types'
import toggleAccodrion from '../decorators/accordion'


class ArticleList extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired,
        toggleAccodrion: PropTypes.func,
        openedId: PropTypes.string,
    }

    render() {
        const {openedId, toggleAccodrion} = this.props
        const articleElements = this.props.articles.map(article => (
            <li key={article.id}>
                <Article
                    article={article}
                    isOpen={article.id === openedId}
                    toggleOpen={toggleAccodrion.bind(this, article.id)}
                />
            </li>
        ))

        return (
            <ul>
                {articleElements}
            </ul>
        )
    }

    

/*
    toggleOpenArticle = (openArticleId) => () => {
        this.setState({ openArticleId })
    }
*/
}

export default toggleAccodrion(ArticleList)