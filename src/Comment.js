import React from 'react'

export default function (props) {
    const comment = props.comment

    return (
        <div>
            User {comment.user} wrote:
            <div>{comment.text}</div>
        </div>
    )
}