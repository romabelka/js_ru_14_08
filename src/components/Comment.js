import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {createCommentSelector} from '../selectors'

// function Comment({comment}) {
function Comment(props) {
    let {comment} = props

    return (
        <div>
            {comment.text} <b>by {comment.user}</b>
        </div>
    )
}

Comment.propTypes = {
    comment: PropTypes.shape({
        text: PropTypes.string.isRequired,
        user: PropTypes.string
    }).isRequired
}

// const createMapStateToProps = () => {
//     const commentSelector = createCommentSelector()
//
//     return (state, ownProps) => ({
//         comment: commentSelector(state, ownProps)
//     })
// }

export default Comment
// export default connect(createMapStateToProps)(Comment)
