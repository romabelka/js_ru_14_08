import React from 'react'
import PropTypes from 'prop-types'


function Loader(props, context) {
    const {loading} = context.language;
    return (
        <h2>{loading}...</h2>
    )
}

Loader.propTypes = {
}

Loader.contextTypes = {
    language: PropTypes.object
}

export default Loader