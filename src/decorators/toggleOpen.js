//decorator === HOC === Higher Order Component
import React from 'react'

export default (OriginalComponent) => class WrappedComponent extends React.Component {
  state = {
    openArticleId: null
  };

  toggleOpenArticle(currentId) {
    const openArticleId = (currentId === this.state.openArticleId) ? null : currentId
    this.setState({ openArticleId })
  }


  render() {
    return (
      <OriginalComponent
        {...this.props}

        toggleOpenArticle={this.toggleOpenArticle.bind(this)}
        openArticleId={this.state.openArticleId}
      />)
  }
}