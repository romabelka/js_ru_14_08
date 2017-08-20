import React, {Component} from 'react'

class Comments extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    }
  }

  handleClick() {
    this.setState({isOpen: !this.state.isOpen});
  }

  render() {
    let button = this.state.isOpen ? 'Скрыть комментарии' : 'Показать комментарии',
      comments = null;


    if (this.props.comments !== undefined) {
      comments = this.props.comments.map(comment =>
        <div key={comment.id} style={{marginLeft: '50px'}}>
          <h3>{comment.user}</h3>
          {comment.text}
        </div>);
    }

    return (
      <div>
        <div style={{display: this.state.isOpen ? 'block' : 'none'}}>
          {comments}
        </div>
        { (this.props.comments !== undefined && this.props.comments.length > 0) ?
          <button style={{marginTop: '20px'}} onClick={this.handleClick.bind(this)}>{button}</button> : null
        }
      </div>
    );
  }
}

export default Comments;