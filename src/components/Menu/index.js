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
        language: PropTypes.object
    }

    render() {
        console.log('context', this.context);
        const {user, menu} = this.context.language;
        return (
            <div>
                <h2>{user}: {this.context.user}</h2>
                <h3>{menu}:</h3>
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export { MenuItem }
export default Menu