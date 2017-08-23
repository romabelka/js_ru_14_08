import React, {Component, PropTypes} from 'react'
import ArticleList from './components/ArticleList'

class App extends Component {
  static propTypes = {
    articles: PropTypes.array.isRequired
  }
  render() {
    return (
      <div style={{ width: '80%', margin: '0 auto' }}>
        <h2>Menu</h2>
        <div>
          <h1>News App</h1>
          <ArticleList articles = {this.props.articles}/>
        </div>
      </div>
    )
  }
}

export default App