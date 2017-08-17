import React, {Component} from 'react'

export default ({ comment }) => (
    <span>
        <span style={{ color: '#ccc' }}>{comment.user}</span> {comment.text} 
    </span>
)
