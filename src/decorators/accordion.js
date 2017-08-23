import React from 'react'

export default (OriginalComponent) => class WrappedComponent extends React.Component {
    
    state = {
        openChildId: null
    }

    toggleOpenChild = (openChildId) => () => {
        let id = this.state.openChildId != openChildId ? openChildId : null
        this.setState({ openChildId : id})
    }

    render() {
        return <OriginalComponent {...this.props} {...this.state} toggleOpenChild = {this.toggleOpenChild}/>
    }
}