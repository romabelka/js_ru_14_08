import React from 'react'

function ArticleComments(props) {
    let articleComments = '';

    if(props.comments){
        articleComments = props.comments.map(comment =>
            <li key={comment.id}>
                <small>
                    <b>{comment.user}</b><br/>
                    {comment.text}
                </small>
            </li>
        )
    }


    return (
        <ul>
            {articleComments}
        </ul>
    )
}

export default ArticleComments