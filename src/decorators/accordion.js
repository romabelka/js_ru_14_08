import React, {Component} from 'react'

export default (OriginalComponent) => class WrappedComponent extends Component {
    state = {
        openedId: null
    }

    toggleAccodrion = (openedId) => {
        this.setState({ 
            openedId: openedId == this.state.openedId ? null : openedId 
        })
    }

    render() {
        return <OriginalComponent {...this.props} {...this.state} toggleAccodrion = {this.toggleAccodrion}/>
    }
}