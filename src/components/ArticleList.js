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
        const {openItemId, toggleOpenItem, articles, filters} = this.props
        const filteredArticles = articles.filter(article => {
            
            if(!filters.selected.length && !filters.date.from && !filters.date.to) {
                return true;
            }

            const from = filters.date.from ? new Date(filters.date.from) : -Infinity;
            const to = filters.date.to ? new Date(filters.date.to) : +Infinity;

            const articleDate = new Date(article.date);
            const titleFilter = filters.selected.length ? filters.selected.indexOf(article.id) !== -1 : true;

            return titleFilter && articleDate >= from && articleDate <= to;
        });

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
}

export default connect(state => ({
    articles: state.articles,
    defaultOpenId: state.articles[0].id,
    filters: state.filters,
}))(accordion(ArticleList))