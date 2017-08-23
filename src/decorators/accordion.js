import React, {Component} from 'react'

export default (OriginalComponent) => class AccordionComponent extends Component {

  state = {
    openElemId: null
  }

  render() {
    return <OriginalComponent
      {...this.props}
      {...this.state}
      toggleOpenElem={this.toggleOpenElem}
    />
  }

  toggleOpenElem = (openElemId) => () => {
    if (this.state.openElemId === openElemId) {
      this.setState({ openElemId: null })
    } else {
      this.setState({ openElemId })
    }
  }
}