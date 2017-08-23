import React from 'react'

export default (OriginalList) => class WrappedList extends React.Component {
    state = {
        openArticleId: null
    }

    toggleOpenArticle = (openArticleId) => () => {
        if (openArticleId === this.state.openArticleId) {
            this.setState({ openArticleId: null })
        } else {
            this.setState({ openArticleId })
        }
    }

    render() {
        return <OriginalList {...this.props} {...this.state} toggleOpenArticle = {this.toggleOpenArticle}/>
    }
}
