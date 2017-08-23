import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Comment extends Component {
    static propTypes = {
        comment: PropTypes.shape({
            id: PropTypes.string.isRequired,
            user: PropTypes.string.isRequired,
            text: PropTypes.string,
        }).isRequired
    }

    render() {
        const {comment} = this.props;
        return (
            <div>
                {comment.text} <b>by {comment.user}</b>
            </div>
        )
    }

}

export default Comment