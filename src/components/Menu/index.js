import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MenuItem from './MenuItem'

class Menu extends Component {
    static propTypes = {

    };

    static contextTypes = {
        user: PropTypes.string,
        lang: PropTypes.string,
        dictionary: PropTypes.object
    }

    render() {
        let {dictionary, lang} = this.context
        return (
            <div>
                <h2>{dictionary[lang].user}: {this.context.user}</h2>
                <h3>{dictionary[lang].menu}:</h3>
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export { MenuItem }
export default Menu
