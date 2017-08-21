import React, {Component} from 'react'
import Comment from './Comment'
import Button from './Button'

class CommentList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isOpen: true
        }

        this.handleClick = this.handleClick.bind(this)
        
    }

    handleClick() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        const commentElements = this.props.comments ? 
            this.props.comments.map(comment => <li key={comment.id}> 
                <Comment comment={comment} />
            </li>) 
            : 
            null

        return (
            <div>
                {commentElements ? 
                    <Button 
                        onClick={this.handleClick}
                        caption={this.state.isOpen ? "Скрыть комментарии" : "Показать комментарии"} 
                    />
                    :
                    null
                }

                { this.state.isOpen ?
                    <ul>
                        {commentElements}
                    </ul>
                    :
                    null
                }
            </div>
        )
    }

}

export default CommentList;