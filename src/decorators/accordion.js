import React from 'react'
import PropTypes from 'prop-types'

export default (OriginalComponent) => class WrappedComponent extends React.Component {
    state = {
        //wanna show first element opened for first time page render
        openArticleId: this.props.articles[0].id
    }

    // http://prgssr.ru/development/vvedenie-v-karrirovanie-v-javascript.html 
    // special type of function for decorators
    toggleOpenArticle = (openArticleId) => () => {
        //if all articlesclosed, give special state closedAll
        openArticleId = openArticleId == this.state.openArticleId? 'closedAll': openArticleId;
        this.setState( {openArticleId: openArticleId} )
    }

    render() {
        return <OriginalComponent {...this.props} {...this.state} toggleOpen={this.toggleOpenArticle}/>
    }
}