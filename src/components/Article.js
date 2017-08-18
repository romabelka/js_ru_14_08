import React, { Component } from 'react';
import Comments from './Comments.jsx';

class Article extends Component {

  render() {
    const { article, isShowComments } = this.props;

    return (
      <div>
        <h3 onClick={this.handleClick}>{article.title}</h3>
        <p>{article.text}</p>
        {
          isShowComments && <div>
            <i>Comments:</i>
            <Comments comments={article.comments} />
          </div>
        }
      </div>
    )
  }
}

export default Article

