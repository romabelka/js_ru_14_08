import React from 'react';

export default (DecoratedComponent) => class IfToggleDecorator extends React.Component {

    state = {
        openCondition: null
    };

    toggleIfOpen = condition => () => {
        this.setState({
            openCondition: this.state.openCondition === condition ? null : condition
        });
    };

    render() {
        return <DecoratedComponent {...this.props} {...this.state} toggleIfOpen = {this.toggleIfOpen}/>;
    }

}
