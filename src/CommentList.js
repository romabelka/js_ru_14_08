import React, {Component} from 'react'
import Comment from './Comment'
import Button from './Button'

class CommentList extends Component {
    constructor(props) {
        super(props)

        this.state = {isOpen: true}
        this.handleClick = this.handleClick.bind(this)
    }

    render() {

        const commentElements = this.props.comments.map(comment =>
            <li key={comment.id}><Comment comment={comment} /></li>)

        return(
            <div>
                <Button onClick={this.handleClick} caption={this.state.isOpen ? "Close" : "Hide"}/>
                <ul>
                    {this.state.isOpen ? commentElements : []}
                </ul>
            </div>
        )
    }

    handleClick() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    
}

export default CommentList