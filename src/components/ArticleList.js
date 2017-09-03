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
        const {openItemId, toggleOpenItem, articles, selected, from, to} = this.props
        const fromDate = +from;
        const toDate = +to;
        console.log('fromDate: ', fromDate);
        console.log('toDate: ', toDate);
        
        
        const articlesSelected = selected.map(item =>{ return item.value })

        const filteredArticles = articles.filter(article => { 
            if(articlesSelected.length === 0 || fromDate === 0 || toDate === 0){
                return article
            }
            if(fromDate > 0){
                const articleDate = +article.date
                console.log('articleDate: ', articleDate);
                return article.indexOf(article.id) != -1 
            }
            return articlesSelected.indexOf(article.id) != -1 
        })
        
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
    selected: state.selected,
    from: state.dates.from,
    to: state.dates.to,
}))(accordion(ArticleList))