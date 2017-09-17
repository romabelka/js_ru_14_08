import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {NavLink} from 'react-router-dom'
import './style.css'

class LangMenuItem extends Component {
    static propTypes = {
        link: PropTypes.string
    };

    static contextTypes = {
        store: PropTypes.object,
        router: PropTypes.object,
        leng: PropTypes.string,
        toggleLeng: PropTypes.func,
        lexicon: PropTypes.object
    }

    render() {
        console.log('----- context', this.context)
        const {link} = this.props
        return (
            <div>
                <a className={(this.context.leng === link) ? "active-link" : "link"} onClick={this.context.toggleLeng(link)}>{link}</a>
            </div>
        )
    }
}

export default LangMenuItem
