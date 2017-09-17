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
        localize: PropTypes.func
    }

    render() {
        console.log('context', this.context)
        return (
            <div>
                <h2>{this.context.localize('username')} : {this.context.user}</h2>
                <h3>{this.context.localize('menu')}:</h3>
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export { MenuItem }
export default Menu