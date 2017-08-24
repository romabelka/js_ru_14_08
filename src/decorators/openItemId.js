import React from 'react'

export default (OriginalComponent) => class ArticleWrapper extends React.Component {
  state = {
    id: null,
  }

  toggleOpenArticle = (openArticleId) => () => {
    console.log('openArticleId: ', openArticleId);
    console.log('this.state.id: ', this.state.id);
      this.setState({ 
        id: openArticleId === this.state.id ? null : openArticleId
    })
  }
  render() {
      return <OriginalComponent 
      {...this.props}
      {...this.state} 
      toggleOpenArticle={this.toggleOpenArticle}
      />
  }
}