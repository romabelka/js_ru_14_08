import React, {Component} from 'react'

export default function Comment(props) {
    return (
        <div>
            <p>
                {props.comment.text}
            </p>
            <p>
                <i>
                    {props.comment.user}
                </i>
            </p>
        </div>
    )
}