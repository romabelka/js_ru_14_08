import React from 'react'

export default (OriginalComponent) => class WrappedComponent extends React.Component {
  state = {
    openElementId: null
  }

  toggleOpenElement = (openElementId) => () => {
    this.setState({ openElementId: this.state.openElementId === openElementId ? null : openElementId })
  }

  render() {
    return <OriginalComponent {...this.props} {...this.state} toggleOpenElement = {this.toggleOpenElement}/>
  }
}