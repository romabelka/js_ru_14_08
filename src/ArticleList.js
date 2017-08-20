import React from 'react'
import Article from './Article'
import Comment from './Comment'

function ArticleList(props) {
    const articleElements = props.articles.map(article =>
        <li key={article.id}><Article article={article}/></li>)




    const articleElements = props.articles.map(article =>

    if(comments in article){
        this.props.comments.map(comment =>
            <li key={comment.id}><Comment comment={comment} /></li>)

        return (
            <ul>
                {articleElements}
            </ul>
        )
    }
)

    return (
        <ul>
            {articleElements}
        </ul>
    )
}

export default ArticleList