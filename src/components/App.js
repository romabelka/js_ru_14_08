import React, { Component } from 'react'
import ArticleList from './ArticleList'

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      isShowComments: false
    }
  }

  handleToggleComments = () => {
    this.setState({isShowComments: !this.state.isShowComments})
  };

  render() {
    const { isShowComments } = this.state;
    const { articles } = this.props;

    return (
      <div>
        <h2>Menu</h2>
          <div>
          <h1>News App</h1>
          <button onClick={this.handleToggleComments}>{isShowComments ? 'Hide' : 'Show'} comments</button>
          <ArticleList articles={articles || []} isShowComments={isShowComments}/>
        </div>
      </div>
    )
  }
}

export default App;