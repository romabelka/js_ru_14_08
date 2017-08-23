import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Comment extends Component {
    static propTypes = {
        comment: PropTypes.object.isRequired
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