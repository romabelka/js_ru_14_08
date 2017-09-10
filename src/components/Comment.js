import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {createCommentSelector} from '../selectors'

class Comment extends React.Component {

    render() {
        let {comment} = this.props;
        console.log('comment', comment);
        return (
            <div>
                {comment.text} <b>by {comment.user}</b>
            </div>
        )
    }
}

Comment.propTypes = {
    comment: PropTypes.shape({
        text: PropTypes.string.isRequired,
        user: PropTypes.string
    }).isRequired
}

const createMapStateToProps = (state) => {
    const comment = createCommentSelector()

    return (state, ownProps) => ({
        comment: comment(state, ownProps)
    })
}

export default connect(createMapStateToProps)(Comment)
