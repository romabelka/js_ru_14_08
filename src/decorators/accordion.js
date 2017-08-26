import React, {Component} from 'react'

export default (WrappedList) => class extends Component {

  state = {
    openArticleId: null
  }

  toggleOpenArticle = (openArticleId)  => (ev) => {
      this.setState({openArticleId: this.state.openArticleId != openArticleId ? openArticleId : null})
  }

  render(){
    return (<WrappedList
              {...this.props}
              {...this.state}
              toggleOpenArticle = {this.toggleOpenArticle}
            />)
  }
}
