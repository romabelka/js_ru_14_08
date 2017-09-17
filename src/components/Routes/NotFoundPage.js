import React, { Component } from 'react'
import PropTypes from 'prop-types'

class NotFoundPage extends Component {
    static propTypes = {

    };

    static contextTypes = {
      lexicon: PropTypes.object
    }

    render() {
        return (
            <div>
                <h1>{this.context.lexicon.notFoundPage}</h1>
            </div>
        )
    }
}

export default NotFoundPage
