import React, {Component, PropTypes} from 'react'

class Comment extends Component {
    static propTypes = {
        comment: PropTypes.object.isRequired
    }
    render() {
        const {comment} = this.props
        return (
            <div>
              {comment.text} <b>by {comment.user}</b>
            </div>
        )
    }
}

export default Comment