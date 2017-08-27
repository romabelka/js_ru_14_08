import React from 'react'

<<<<<<< HEAD
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
=======
export default Component => class Accordion extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            openItemId: props.defaultOpenId
        }
    }

    render() {
        return <Component {...this.props} toggleOpenItem = {this.toggleOpenItemMemoized} openItemId = {this.state.openItemId}/>
    }

    toggleOpenItem = openItemId => ev => {
        this.setState({
            openItemId: openItemId === this.state.openItemId ? null : openItemId
        })
    }

    toggleOpenItemMemoized = (openItemId) => {
        if (this.memoizedTogglers.get(openItemId)) return this.memoizedTogglers.get(openItemId)
        const toggler = this.toggleOpenItem(openItemId)
        this.memoizedTogglers.set(openItemId, toggler)
        return toggler
    }

    memoizedTogglers = new Map()
>>>>>>> upstream/master
}