import React from 'react'

function Comment(props) {
    return (
        <div>
            <h5>{props.comment.user}</h5>
            <p>{props.comment.text}</p>
        </div>
    )
}

export default Comment