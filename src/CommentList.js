import React, {Component} from 'react'
import Comment from './Comment'

class CommentList extends Component {
	constructor(props) {
        super(props)

        this.state = {
            isOpen: false
        }
    }

    render() {
		return (
			<div>
				<hr/>
				<h3 onClick = {this.handleClick}>{this.getHeaderText()}</h3>
				<ul>
					{this.getComments()}
				</ul>
				<hr/>
			</div>
		)
	}

	handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    getHeaderText() {
    	return this.state.isOpen ? 'Hide comments' : 'Show comments'
    }

	getComments() {
		return this.state.isOpen && this.props.comments.map(comment => <li key={comment.id}><Comment comment={comment}/></li>)
	}
	
}

export default CommentList