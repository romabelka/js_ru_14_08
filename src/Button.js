import React, {Component} from 'react'

class Button extends React.Component {
    render() {
        return(
            <button onClick={this.props.onClick}>{this.props.caption}</button>
        )
    }
}

export default Button