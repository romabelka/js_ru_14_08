import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {increment} from '../AC'

class Counter extends Component {
    static propTypes = {

    };

    static contextTypes = {
        language: PropTypes.object
    }


    render() {
        const {increment} = this.context.language;
        return (
            <div>
                <h1>
                    {this.props.count}
                    <button onClick = {this.handleIncrement}>{increment}</button>
                </h1>
            </div>
        )
    }

    handleIncrement = () => {
        const action = increment()
        this.props.dispatch(action)
    }
}

const mapStateToProps = state => {
    return {
        count: state.counter
    }
}

export default connect(mapStateToProps)(Counter)