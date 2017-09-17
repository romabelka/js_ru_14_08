import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {NavLink} from 'react-router-dom'

class MenuItem extends Component {
    static propTypes = {
        link: PropTypes.string
    };
    render() {
        const {link} = this.props
        console.log('-----NavLink', NavLink)
        return (
            <div>
                <NavLink to={`/${link}`} activeStyle={{color: 'red'}}>{link}</NavLink>
            </div>
        )
    }
}

export default MenuItem
