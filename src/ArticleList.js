import React from 'react'
import Article from './Article'

function ArticleList(props) {
    const articleElements = props.articles.map(
        article => <li key={article.id}><Article article={article}/></li>
    )
    return (
        <ul>
            {articleElements}
        </ul>
    )
}

export default ArticleList