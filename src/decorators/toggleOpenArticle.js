//decorator === HOC === Higher Order Component
import React from 'react'

export default (OriginalComponent) => class WrappedComponent extends React.Component {

    state = {
        openArticleId: null
    }

    toggleOpenArticle = (openArticleId) => () => {
        if( openArticleId == this.state.openArticleId ) {
            this.setState({ openArticleId : null })
        } else {
            this.setState({ openArticleId })
        }
    }

    render() {
        return <OriginalComponent {...this.props} {...this.state} toggleOpenArticle = {this.toggleOpenArticle} />
    }
}