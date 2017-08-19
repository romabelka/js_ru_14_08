import React from 'react'


export default function ArticleComment(props) {
    const {articleComment} = props
    return (
        <div>
            <hr/>
            <p>{articleComment.text}</p>
            <p>Author: {articleComment.user}</p>
        </div>
    )
}




