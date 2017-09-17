import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {LANGUAGES} from './../constants'

class LanguageSwitch extends Component {
    static propTypes = {

    };

    render() {
        
        return (
            <ul>
                { LANGUAGES.map(language => <li key={language} onClick={this.handleClick}>{language}</li>) }
            </ul>
        )
    }

    handleClick = ev => {
        this.props.onClick(ev.target.textContent)
    }

}

export default LanguageSwitch