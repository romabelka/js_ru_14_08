import React, {Component} from 'react'
import Article from './Article'
import PropTypes from 'prop-types'
import Accordion from '../decorators/accordion'

class ArticleList extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired,
        toggleOpen: PropTypes.func.isRequired
    }

    render() {
        const toggleOpen = this.props.toggleOpen;
        
        const articleElements = this.props.articles.map((article, key) => (
            <li key={article.id}>
                <Article
                    article={article}
                    isOpen={(article.id === this.props.openArticleId)}
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


    // toggleOpenArticle = (openArticleId) => () => {
    //     this.setState({ openArticleId })
    // }

}

export default Accordion(ArticleList)