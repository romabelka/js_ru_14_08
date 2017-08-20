import React from 'react'
import Article from './Article'
import Comment from './CommentList'


function ArticleList(props) {
    const articleElements = props.articles.map(article =>
        <li key={article.id}><Article article={article}/></li>)

    return (
        <ul>
            {articleElements}
        </ul>
    )
}

export default ArticleList