import React from 'react'

function Comment (props) {
	const {comment} = props
	return (
		<blockquote>
			<p>"{comment.text}"</p>
			<cite>{comment.user}</cite>
		</blockquote>
	) 
}

export default Comment