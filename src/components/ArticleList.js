import React, {Component} from 'react'
import Article from './Article'
import accordion from '../decorators/accordion'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

class ArticleList extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired,
        //from accordion decorator
        openItemId: PropTypes.string,
        toggleOpenItem: PropTypes.func.isRequired
    }

    render() {
        const {openItemId, toggleOpenItem, articles} = this.props

        const filteredArticles = this.filterArticles(articles)

        const articleElements = filteredArticles.map(article => (
            <li key={article.id}>
                <Article
                    article={article}
                    isOpen={article.id === openItemId}
                    toggleOpen={toggleOpenItem(article.id)}
                />
            </li>
        ))

        return (
            <ul>
                {articleElements}
            </ul>
        )
    }

    filterArticles(articles) {
        const {selectedArticles, selectedDate} = this.props

        let filteredArticles = articles;

        if (selectedArticles && selectedArticles.length > 0) {
            filteredArticles = filteredArticles.filter(article => selectedArticles.indexOf(article.id) > -1)
        }

        if (selectedDate.to && selectedDate.from) {
            filteredArticles = filteredArticles.filter(article => {
                const dateObj = new Date(article.date);
                return (dateObj >= selectedDate.from && dateObj <= selectedDate.to)
            })
        }

        return filteredArticles

    }
}

export default connect(state => ({
    articles: state.articles,
    defaultOpenId: state.articles[0].id,
    selectedArticles: state.selectedArticles,
    selectedDate: state.selectedDate
}))(accordion(ArticleList))