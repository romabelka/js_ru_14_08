import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MenuItem from './MenuItem'

class Menu extends Component {
    static propTypes = {

    };

    static contextTypes = {
        store: PropTypes.object,
        router: PropTypes.object,
        user: PropTypes.string,
        language: PropTypes.string,
        dictionary: PropTypes.object
    }

    render() {
        //console.log('context', this.context);
        const { language, dictionary } = this.context;

        return (
            <div>
                <h2>{ `${dictionary.user[language]}: ${this.context.user}` }</h2>
                <h3>{`${dictionary.menu[language]}:`}</h3>
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export { MenuItem }
export default Menu