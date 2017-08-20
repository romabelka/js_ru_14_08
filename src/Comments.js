import React, {Component} from 'react'

class Comments extends Component {
		constructor(props) {
			super(props)

			this.state = {
				isOpenComments: false
			}
		}
	
        render() {
        const {comments} = this.props
		const commentsElements = comments.map(comments => <div key={comments.id}><b>{comments.user}:</b>&nbsp;&nbsp;{comments.text}</div>)
   
        return (
            <div>
                <button onClick = {this.handleClick}>{this.state.isOpenComments?'hide':'show'}</button>
					{this.getComments(commentsElements)}				
            </div>
        )
    }
	
	handleClick = () => {
        this.setState({
            isOpenComments: !this.state.isOpenComments
        })
    }

    getComments(commentsElements) {
        return this.state.isOpenComments && commentsElements
    }
}

export default Comments