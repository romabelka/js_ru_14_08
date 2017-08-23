import React from 'react'

export default (OriginalComponent) => class WrappedComponent extends React.Component {

    state = {
        openArticleId: null
    };

    toggleOpenArticle = (articleId) => () => {

        if (this.state.openArticleId === articleId) {
            this.setState({
                openArticleId: null
            });
            return;
        }


        this.setState({
            openArticleId: articleId
        })
    };

    render() {
        return <OriginalComponent {...this.props} {...this.state} toggleOpenArticle={this.toggleOpenArticle}/>
    }
}
