import React, {Component} from 'react'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import {selectArticleId} from '../../AC'
import {connect} from 'react-redux'


class SelectArticle extends Component {

  state = {
      selected: null
  }
  handleSelectionChange = selected => {
    this.setState({ selected })
    const {selectArticleId} = this.props;
    const mapSelected = selected.map( select => select.value)
    const action = selectArticleId(mapSelected)
  }

  render() {
    const {options} = this.props;
    return (
      <Select options = {options}
              value = {this.state.selected}
              onChange = {this.handleSelectionChange}
              multi
      />)
    }
  }

export default connect(null, {selectArticleId})(SelectArticle)
