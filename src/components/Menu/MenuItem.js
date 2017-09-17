import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {NavLink} from 'react-router-dom'

class MenuItem extends Component {
    static propTypes = {
        link: PropTypes.string
    };
    static contextTypes = {
        localize: PropTypes.func
    }
    render() {
        const {link} = this.props
        return (
            <div>
                <NavLink to={`/${link}`} activeStyle={{color: 'red'}}>{this.context.localize(link)}</NavLink>
            </div>
        )
    }
}

export default MenuItem