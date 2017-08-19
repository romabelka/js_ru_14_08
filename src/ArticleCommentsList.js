import React from 'react'
import ArticleComment from './ArticleComment'

function ArticleCommentsList(props) {
    let articleComments = 'No comments';
    if( typeof props.comments != 'undefined' && Object.prototype.toString.call( props.comments ) === '[object Array]' && props.comments.length ) {
        articleComments = props.comments.map(articleComment => <li key={articleComment.id}><ArticleComment articleComment={articleComment}/></li>)
    }

    return (
        <div>
            <br/>
            <br/>

            <ol>
                {articleComments}
            </ol>
        </div>
    )
}

export default ArticleCommentsList