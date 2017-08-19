import React, {Component} from 'react'
import Comment from './Comment'

export default function CommentList(props) {
    const commentElements = props.comments.map(comment => <li key={comment.id}>
                                                            <Comment comment={comment} />
                                                        </li>)

    return (
        <ul>
            {commentElements}
        </ul>
    )
}