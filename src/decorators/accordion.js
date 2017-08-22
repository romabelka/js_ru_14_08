import React from 'react'

export default (OriginalComponent) => class Accordion extends React.Component {

    state = {
        openArticleId: null
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