import React, {Component} from 'react'
import Article from './Article'
import accordion from '../decorators/accordion'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {filtratedArticlesSelector} from '../selectors'

class ArticleList extends Component {
    static propTypes = {
        articles: PropTypes.object.isRequired,
        //from accordion decorator
        openItemId: PropTypes.string,
        toggleOpenItem: PropTypes.func.isRequired
    }

    render() {
        console.log('---', 'rendering article list')
        const {openItemId, toggleOpenItem, articles} = this.props

        let articleElements = [];
        Object.keys(articles).forEach((id) => {
            const article = articles[id]

            articleElements.push(
                <li key={id}>
                    <Article
                        article={article}
                        isOpen={article.id === openItemId}
                        toggleOpen={toggleOpenItem(article.id)}
                    />
                </li>
            )
        })

        return (
            <ul>
                {articleElements}
            </ul>
        )
    }
}

export default connect(state => {
    console.log('---', 'connect')
    return {
        articles: filtratedArticlesSelector(state)
    }
})(accordion(ArticleList))