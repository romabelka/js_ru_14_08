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

    findItemInArray(arr, item){
        return arr.indexOf(item) != -1
    }

    render() {
        const {openItemId, toggleOpenItem, articles, selected, from, to} = this.props
        const fromDate = +from;
        const toDate = +to;
        
        const arrDate = articles.filter(article => {
            return Date.parse(article.date) >= fromDate && Date.parse(article.date) <= toDate
        })

        const articlesSelected = selected.map(item =>{ return item.value })
        const dateRangeArray = arrDate.map(item => {return item.id})
        const dateSelectConcatanate = articlesSelected.filter(elem => this.findItemInArray(dateRangeArray, elem)) 

        const filteredArticles = articles.filter(article => { 
            if(articlesSelected.length > 0 && fromDate > 0){
              return this.findItemInArray(dateSelectConcatanate, article.id)
            }
            else if(articlesSelected.length > 0){
              return this.findItemInArray(articlesSelected, article.id)
            }else if(dateRangeArray.length > 0){
                return this.findItemInArray(dateRangeArray, article.id)
            }
            else if(articlesSelected.length === 0 && fromDate === 0 && toDate === 0){
                return article
            }
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