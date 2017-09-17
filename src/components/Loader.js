import React from 'react'
import PropTypes from 'prop-types'

function Loader(props, context) {
    const {localize} = context
    return (
        <h2>{context.localize('loadingMsg')}</h2>
    )
}

Loader.propTypes = {
}
Loader.contextTypes = {
    localize: PropTypes.func
}
export default Loader