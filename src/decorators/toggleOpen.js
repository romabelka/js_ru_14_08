//decorator === HOC === Higher Order Component
import React from 'react'

export default (OriginalComponent) => class WrappedComponent extends React.Component {
  state = {
    openArticleId: null
  };

  toggleOpenArticle(currentId) {
    const {openArticleId} = this.state;
    const newId = (currentId === openArticleId) ? null : currentId;

    this.setState({openArticleId: newId})
  }


  // toggleOpenArticle = (currentId) => () => {
  //   console.log('currentId:', currentId);
  //   const {openArticleId} = this.state;
  //   const newId = (currentId === openArticleId) ? null : currentId;
  //
  //   this.setState({openArticleId: newId})
  // }


  render() {
    return (
      <OriginalComponent
        {...this.props}

        toggleOpenArticle={this.toggleOpenArticle.bind(this)}
        openArticleId={this.state.openArticleId}
      />)
  }
}