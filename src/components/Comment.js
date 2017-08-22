import React from 'react'
import PropTypes from 'prop-types'

class Comment extends React.Component {
    static propTypes = {
        comment: PropTypes.shape({
            text: PropTypes.string,
            user: PropTypes.string
        })
    }

    render() {
        return (
            <div>
                {this.props.comment.text} <b>by {this.props.comment.user}</b>
            </div>
        )
    }
}

export default Comment