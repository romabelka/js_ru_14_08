import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {increment} from '../AC'

class Counter extends Component {
  static propTypes = {

  };

  render() {
    return (
      <div>
        <h1>
          {this.props.count}
        </h1>
        <button onClick = {this.handleIncrement}>INCREMENT</button>
      </div>
    )
  }

  handleIncrement = () => {
    const action = increment()
    this.props.dispatch(action)
  }
}

 function mapStateToProps (state) {
  return {
    count: state.counter
  }
}

export default connect(mapStateToProps)(Counter)
