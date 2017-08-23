import React, {Component} from 'react'
import Article from './Article'

class ArticleList extends Component {
    state = {
      openArticleId: null,
      accordionStatus: false
    }

    render() {
      const articleElements = this.props.articles.map(article =>
        <li key={article.id}>
          <Article
            article={article}
            isOpen = {(article.id === this.state.openArticleId) && this.state.accordionStatus}
            toggleOpen = {this.toggleOpenArticle.bind(this, article.id)}
            />
        </li>)
      return (
          <ul>
              {articleElements}
          </ul>
      );
    }

    toggleOpenArticle(openArticleId){
      console.log(this.state.accordionStatus);
      this.setState({openArticleId: openArticleId})
      this.setState({accordionStatus: !this.state.accordionStatus})
    }
}

export default ArticleList
