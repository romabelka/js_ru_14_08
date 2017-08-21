import React, { Component } from 'react'

export default (OriginalComponent) => class WrappedComponent extends Component {
    state = {
        openArticleId: null
    }

    toggleOpenArticle = id => () => {
        this.setState({
            openArticleId: id == this.state.openArticleId ? null : id
        });
    };

    render() {
        return <OriginalComponent {...this.props} {...this.state} toggleOpenArticle={this.toggleOpenArticle} />
    }
}