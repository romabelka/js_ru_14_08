import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {NavLink} from 'react-router-dom'

class MenuItem extends Component {
    static propTypes = {
        link: PropTypes.string,
        text: PropTypes.string
    };

    render() {
        const {link, text} = this.props;
        return (
            <div>
                <NavLink to={`/${link}`} activeStyle={{color: 'red'}}>{text}</NavLink>
            </div>
        )
    }
}

export default MenuItem