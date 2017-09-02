import React, {Component} from 'react'
import SelectArticle from './SelectArticle'
import Calendar from './Calendar'

class Filters extends Component {
  render() {
    const {options} = this.props;
    return (
      <div>
        <Calendar />
        <SelectArticle options={options} />
      </div>
    )
  }
}

export default Filters
