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

        let selected = filters.selected.map(item => item.value);

        const articleElements = articles
        .filter(item => (
            selected.length > 0 ? selected.indexOf(item.id) > -1 : item
        ))
        .filter(item => {
            let {from, to} = filters.range;

            if (from && !to) {
                return Date.parse(from) < Date.parse(item.date)
            }

            if (!from && to) {
                return Date.parse(to) > Date.parse(item.date)
            }

            if (from && to) {
                return Date.parse(from) < Date.parse(item.date) && Date.parse(to) > Date.parse(item.date)
            }

            return item;
        })
        .map(article => (
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
    filters: state.filters
}))(accordion(ArticleList))
