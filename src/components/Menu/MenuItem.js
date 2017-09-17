import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {NavLink} from 'react-router-dom'
import localization from './../../decorators/localization'

class MenuItem extends Component {
    static propTypes = {
        link: PropTypes.string
    };

    render() {
        const {link, __} = this.props
        return (
            <div>
                <NavLink to={`/${link}`} activeStyle={{color: 'red'}}>{__(link)}</NavLink>
            </div>
        )
    }
}

export default localization(MenuItem)