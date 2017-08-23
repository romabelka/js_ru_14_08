import React from 'react';
import propTypes from 'prop-types';

function Comment({comment}) {
    return (
        <div>
            {comment.text} <b>by {comment.user}</b>
        </div>
    )
}

export default Comment;

Comment.propTypes = {
    comment: propTypes.shape({
        id: propTypes.string,
        user: propTypes.string,
        text: propTypes.string
    })
}