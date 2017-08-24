import React, {Component} from 'react'
import Article from './Article'
import accordion from '../decorators/accordion'
import PropTypes from 'prop-types'

function ArticleList({articles, checkOpenIt, toggleIt}){
    const articleElements = articles.map(article => (
        <li key={article.id}>
            <Article
                article={article}
                isOpen={checkOpenIt(article.id)}
                toggleOpen={toggleIt(article.id)}
            />
        </li>
    ))

    return (
        <ul>
            {articleElements}
        </ul>
    )
}

ArticleList.propTypes = {
    article: PropTypes.array,
    isOpen: PropTypes.func,
    toggleOpen: PropTypes.func
}

export default accordion(ArticleList)