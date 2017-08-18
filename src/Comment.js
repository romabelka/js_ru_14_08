import React from 'react'

function Comment(props) {

    const {user='Anonymous', text='Empty message'} = props;

    return <div>
        <h3>{user}</h3>
        <p>{text}</p>
    </div>
}

export default Comment;
