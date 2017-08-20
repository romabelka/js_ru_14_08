import React from 'react'
import Button from './Button'

class Comment extends React.Component {
    render() {
        return(
            <div>
                <p>{this.props.comment.text}</p>
                <p><i>{this.props.comment.user}</i></p>
                <Button/>
            </div>
        )
    }
}

export default Comment