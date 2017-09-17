import React from 'react'
import PropTypes from 'prop-types'

export default (OriginalComponent) => class LocalizedComponent extends React.Component {
    static contextTypes = {
        language: PropTypes.string,
        localization: PropTypes.object
    }

    __ = (text) => {
        return this.context.localization[text][this.context.language]
    }

    render() {
        return <OriginalComponent {...this.props} __ = {this.__}/>
    }
}