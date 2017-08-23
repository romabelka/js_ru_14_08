import React, { Component } from 'react'
import ArticleList from './ArticleList'
import PropTypes from 'prop-types'

class App extends Component{
  static propTypes = {
    articles: PropTypes.array,
  }

  render() {
    const { articles } = this.props;

    return (
      <div>
        <h2>Menu</h2>
          <div>
          <h1>News App</h1>
          <ArticleList articles={articles || []} />
        </div>
      </div>
    )
  }
}

export default App;