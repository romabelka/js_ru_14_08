import React from 'react'
import PropTypes from 'prop-types';

function Comment({comment}) {

    Comment.propTypes = {
        comment: PropTypes.shape(
            {
                id: PropTypes.string,
                user: PropTypes.string,
                text: PropTypes.string
            }
        ).isRequired
    };

    return (
        <div>
            {comment.text} <b>by {comment.user}</b>
        </div>
    )
}

export default Comment