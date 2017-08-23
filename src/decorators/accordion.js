import React from 'react'

export default (OriginalComponent) => class WrappedComponent extends React.Component {
	state = {
		openElementId: null
	}

	render() {
		return <OriginalComponent {...this.props}  {...this.state} toggleOpen = {this.toggleOpen} />
	}

	toggleOpen = (openElementId) => () => { 
		this.state.openElementId === openElementId ? this.setState({openElementId: null}) : this.setState({openElementId})
	}
}