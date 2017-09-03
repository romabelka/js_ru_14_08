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
        const {openItemId, toggleOpenItem} = this.props
        const articleElements = this.getFilteredArticles().map(article => (
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

    getFilteredArticles = () => {
       return this.filterArticlesByDate(this.filterArticlesBySelect(this.props.articles))
    }

    filterArticlesByDate = (articles) => {
        const dateRange = this.props.dateFilterState
        const fromTime = dateRange.from ? dateRange.from.getTime() : null
        const toTime = dateRange.to ? dateRange.to.getTime() + 3600 * 24 * 1000 : null
        if (!toTime && !fromTime) return articles
        return articles.filter(
            (article) => {
                if (article.date) {
                    const timestamp = new Date(article.date).getTime()
                    if (fromTime && toTime) {
                        return timestamp >= fromTime && timestamp < toTime 
                    } else if (fromTime) {
                        return timestamp >= fromTime
                    } else if (toTime) {
                        return timestamp <= toTime
                    }
                }

                return true
            }
        )

    }

    filterArticlesBySelect = (articles) => {
        const selected = this.props.selectFilterState
        if (!selected || !selected.length) {
            return articles
        }
            
        const filteredArticleIds = selected.map((selectOption) => selectOption.value)
        return articles.filter((article) => filteredArticleIds.includes(article.id))
    }
}

export default connect(state => ({
    articles: state.articles,
    selectFilterState: state.selectFilter,
    dateFilterState: state.dateFilter
}))(accordion(ArticleList))