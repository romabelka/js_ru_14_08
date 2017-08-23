import React, {Component} from 'react'

export default (WrappedList) => class extends Component {
  state = {
    openArticleId: null,
    accordionStatus: false
  }

  toggleOpenArticle(openArticleId){
    console.log(openArticleId);
    console.log(this.accordionStatus);

  }

  toggleOpenArticle = (openArticleId) => () => {
      this.setState({openArticleId: openArticleId})
      this.setState({accordionStatus: !this.state.accordionStatus})
      debugger
  }

  render(){
    console.log(this.props);

    return (<WrappedList
              {...this.props}
              {...this.state}
              toggleOpenArticle = {this.toggleOpenArticle}
            />)
  }
}
