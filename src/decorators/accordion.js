import React, {Component} from 'react'

export default (WrappedList) => class extends Component {
  
  state = {
    openArticleId: null,
    accordionStatus: false
  }

  toggleOpenArticle = (openArticleId) => () => {
      this.setState({openArticleId: openArticleId})
      this.setState({accordionStatus: !this.state.accordionStatus})
  }

  render(){
    return (<WrappedList
              {...this.props}
              {...this.state}
              toggleOpenArticle = {this.toggleOpenArticle}
            />)
  }
}
