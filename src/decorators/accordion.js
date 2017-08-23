import React from 'react'

export default (OriginalComponent) => class AccordionComponent extends React.Component {
    state = {
        activeItemId: null
    };

    toggle = (id) => {
        if (id === this.state.activeItemId) {
            id = null;
        }

        this.setState({ activeItemId: id });
    };

    render() {
        return <OriginalComponent {...this.props} {...this.state} toggle={this.toggle} />
    }
}