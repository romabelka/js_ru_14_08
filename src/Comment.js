import React from 'react'

class Comment extends React.Component {
    render() {
        return(
            <div>
                <p>{this.props.comment.text}</p>
                <p><i>{this.props.comment.user}</i></p>
            </div>
        )
    }
}

export default Comment