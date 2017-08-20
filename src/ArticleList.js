import React from 'react'
import Article from './Article'
import CommentList from "./CommentList";


function ArticleList(props) {
    const articleElements = props.articles.map(
      article =>
        <li key={article.id}>
          <Article article={article}/>
          {article.comments && <CommentList comments={article.comments}/>}
        </li>
    )
    return (
        <ul>
            {articleElements}
        </ul>
    )
}

export default ArticleList