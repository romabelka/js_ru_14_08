import React, {Component} from 'react'
import Comment from './Comment'


class CommentList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: true
    }
  }

  render() {
    const commentItems = this.props.comments.map(
      comment => <li key={comment.id}><Comment comment={comment}/></li>
    )
    return (
      <div>
        <h4>Comments</h4>
        <button onClick={this.handleClick}>
          {this.getBtnDescr()}
          </button>
        {this.state.isOpen && <ul>{commentItems}</ul>}
      </div>
    )
  }

  handleClick = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  getBtnDescr() {
    return (this.state.isOpen) ? 'Hide' : 'Open'
  }
}


export default CommentList