import React from 'react'

export default (OriginalComponent) => class WrappedComponent extends React.Component {
    state = {
        openIt: null
    }

    toggleIt = openIt => event => {
        event.preventDefault()
        this.setState({
            openIt: this.checkOpenIt(openIt) ? null : openIt
        })
    }

    checkOpenIt = id => id === this.state.openIt

    render() {
      return <OriginalComponent {...this.props} toggleIt = {this.toggleIt} checkOpenIt = {this.checkOpenIt} />
    }
}