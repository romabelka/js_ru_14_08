import React from 'react'

function Comment({comment}) {
    return (
        <div>
            <h5>{comment.user}</h5>
            <p>{comment.text}</p>
        </div>
    )
}

export default Comment