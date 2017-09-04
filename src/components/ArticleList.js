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
        const articleElements = articles.map(article => (
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
    articles: ((articles,filters)=>{
        //filters={dateRange:{from:'', to:''}, selectedArticles:[]}
        const ids = filters.selectedArticles.map(el => el.value)
        const filteredSelect = articles.filter(article => ids && ids.length
            ? ids.includes(article.id)
            : article)
        const to = Date.parse( filters.dateRange.to),
            from = Date.parse( filters.dateRange.from)
            const filteredRange = articles.filter(article => {
                let result = from ? Date.parse(article.date) >= from : true;
                return to ? result && Date.parse(article.date) <= to : result;
            })
            return filteredRange.filter(el=>filteredSelect.map(el=>el.id).includes(el.id))
    })(state.articles, state.filters),
    //defaultOpenId: state.articles[0].id
}))(accordion(ArticleList))