import React from 'react'

export default (OriginalComponent) => class AccordionWrapper extends React.Component {
  state = {
    openArticleId: null,
  }

  toggleOpenArticle = (openArticleId) => () => {
      this.setState({ 
        openArticleId: openArticleId === this.state.openArticleId ? null : openArticleId
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