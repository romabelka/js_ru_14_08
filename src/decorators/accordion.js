import React, {Component} from 'react';

export default (OriginalComponent) =>  class WrappedComponent extends Component {
    state = {
        openId: null
    };

    toggleOpenId = (id) => () => {
        this.setState ({
            openId: this.state.openId === id ? null : id 
        })
    };

    render() {
        return (
            <OriginalComponent  {...this.state} {...this.props} toggleOpenId = {this.toggleOpenId} />
        );
    }
}
