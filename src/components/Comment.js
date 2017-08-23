import React from 'react'
import PropTypes from 'prop-types'

class Comment extends React.Component {
    static propTypes = {
        article: PropTypes.shape({
            id: PropTypes.string,
            user: PropTypes.string.isRequired,
            text: PropTypes.string
        }).isRequired
    }

    render() {
        return(
            <div>
                {this.props.comment.text} <b>by {this.props.comment.user}</b>
            </div>
        )
    }
}

export default Comment