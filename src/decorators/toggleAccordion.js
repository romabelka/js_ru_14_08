//decorator === HOC === Higher Order Component
import React from 'react'

export default (OriginalComponent) => class WrappedComponent extends React.Component {
    state = {
        openArticleId: false
    }

    toggleOpenArticle = (openArticleId) => () => {
        this.state.openArticleId !== openArticleId ?
            this.setState({ openArticleId })
            :
            this.setState({ openArticleId: null })
    }

    render() {
        return <OriginalComponent {...this.props} {...this.state} toggleOpenArticle = {this.toggleOpenArticle}/>
    }
}