import React from 'react'

export default function Comment(props) {
  return (
    <div>
      <h4>{props.comment.user}</h4>
      <p>{props.comment.text}</p>
    </div>
  )
}