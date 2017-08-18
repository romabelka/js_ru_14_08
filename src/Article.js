import React, { Component } from 'react'
import Comments from './Comments'

class Article extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: true,
      isOpenComment: true
    }
  }

  render() {
    const { article } = this.props

    return (
      <div>
        <h3 onClick={this.handleClick}>{article.title}</h3>
        {this.getBody()}
        {article.comments && <div>
          <button onClick={this.handleClickComment} style={{padding: '6px 12px', borderRadius: '3px', border: '1px solid grey', color: 'white', background: 'grey'}}>
          {this.state.isOpenComment ? 'Hide' : 'Open'}</button>
          {this.state.isOpenComment && <Comments comments={article.comments} />}
          </div>
        }
      </div>
    )
  }

  handleClick = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  handleClickComment = () => {
    this.setState({
      isOpenComment: !this.state.isOpenComment
    })
  }

  getBody() {
    return this.state.isOpen && <p>{this.props.article.text}</p>
  }
}

export default Article

/*
export default function Article(props) {
    const {article} = props
    return (
        <div>
            <h3>{article.title}</h3>
            <p>{article.text}</p>
        </div>
    )
}*/
