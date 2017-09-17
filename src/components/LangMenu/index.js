import React, { Component } from 'react'
import PropTypes from 'prop-types'
import LangMenuItem from './LangMenuItem'

class LangMenu extends Component {
    static propTypes = {

    };

    static contextTypes = {
        store: PropTypes.object,
        router: PropTypes.object,
        user: PropTypes.string,
        leng: PropTypes.string,
        lexicon: PropTypes.object
    }

    render() {
        const {leng, lexicon} = this.context
        return (
            <div>
                    {this.props.children}
            </div>

        )
    }
}

export { LangMenuItem }
export default LangMenu
