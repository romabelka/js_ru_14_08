import React from 'react'

function Comment(props) {
    const { user, text } = props.comment;

    return (
        <div>
            User: <b>{ user }</b>
            <br/>
            <p>
                { text }
            </p>
        </div>
    )
}

export default Comment