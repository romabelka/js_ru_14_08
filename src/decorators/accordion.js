import React from 'react'

export default (OriginalComponent) => class WrappedComponent extends React.Component {
  state = {
    openArticleId: ''
  };

  toggleOpenArticle = (id) => () => {
    this.setState ({
      openArticleId: this.state.openArticleId !== id ? id : ''
    })
  };

  render() {
    return <OriginalComponent {...this.props} {...this.state} toggleOpenArticle = {this.toggleOpenArticle}/>
  }
}