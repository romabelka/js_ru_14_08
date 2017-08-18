import React from 'react'

function Comment(props) {

    const {user, text} = props;

    return <div>
        <h3>{user}</h3>
        <p>{text}</p>
    </div>
}

export default Comment;
