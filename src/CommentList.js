import React, {Component} from 'react'
import Comment from './Comment'

class CommentList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: false,
            label:'Show commets'
        }
    }

    render() {
       

        return (
            <div>
                {this.getButton()}
                {this.getBody()}
            </div>
            
        )
    }

    handleClick = () => {
        let state = this.state.isOpen ? 'Show' : 'Hide'
        this.setState({
            isOpen: !this.state.isOpen,
            label: `${state} commets` })
    }
    getBody=()=> {
         const commentsElements = (this.props.comments||[]).map(comment => <li key={comment.id}><Comment comment={comment}/></li>)
        return this.state.isOpen && <ul>{commentsElements}</ul>
    }
    getButton=()=> {
        return this.props.comments && this.props.comments.length && <button onClick = {this.handleClick} >{this.state.label}</button>
    }
}

export default CommentList