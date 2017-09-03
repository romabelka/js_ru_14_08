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
        const {openItemId, toggleOpenItem, articles} = this.props;
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
        );
    }
}

function filterArticles(articles, filters) {
    // сортировка по выбоанным статьям в селекте
    const selectedArticles = filters.selected;
    const lenSelectedArticles = selectedArticles.length;

    const selectArticle = articles.filter(article => {
        if ( !selectedArticles || selectedArticles && !lenSelectedArticles) return true;

        let flag = false;
        for (let i = 0; i < lenSelectedArticles; i++) {
            if ( selectedArticles[i].value === article.id ) {
                flag = true;
                continue;
            }
        }

        return flag;
    });

    // сортировка по датам
    const { from, to } = filters;
    return selectArticle.filter(article => {
        if ( !from || !to ) return true;

        return (Date.parse(article.date) >= Date.parse(from)) && (Date.parse(article.date) <= Date.parse(to));
    })
}

export default connect(state => ({
    articles: filterArticles(state.articles, state.filters),
    defaultOpenId: state.articles[0].id
}))(accordion(ArticleList))