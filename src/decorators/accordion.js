import React from 'react'

export default (OriginalComponent) => class WrappedComponent extends React.Component {
    state = {
        openAccordionItemId: null
    }

    toggleOpenAccordion = (openAccordionItemId) => () => {
        this.setState((prevState, props) => {
            return {openAccordionItemId: (prevState.openAccordionItemId !== openAccordionItemId) ? openAccordionItemId : null};
        })
    }

    render() {
        return <OriginalComponent {...this.props} {...this.state} toggleOpenAccordion = {this.toggleOpenAccordion}/>
    }
}