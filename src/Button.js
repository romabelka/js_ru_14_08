import React, {Component} from 'react'

class Button extends Component {
    constructor(props) {
        super(props)

        this.state = {caption:'Open'}

        }

    render() {
        return(
            <button onClick={this.changeValue()}>{this.props.caption}</button>
        )
    }

    changeValue = () => {
        this.setState({caption:'Close'})
    }
}


export default Button