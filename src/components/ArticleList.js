import React, {Component} from 'react'
import Article from './Article'
import accordion from '../decorators/accordion'

function ArticleList(props)  {

        const articleElements = props.articles.map(article => (
            <li key={article.id}>
                <Article
                    article={article}
                    isOpen={article.id === props.openArticleId}
                    toggleOpen={props.toggleOpenArticle(article.id)}
                />
            </li>
        ))

        return (
            <ul>
                {articleElements}
            </ul>
        )
    }

export default accordion(ArticleList)