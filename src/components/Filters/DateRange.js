import React, {Component} from 'react';
import DayPicker, {DateUtils} from 'react-day-picker';
import {connect} from 'react-redux';
import {dateRange} from '../../AC/index';
import {DATE_RANGE} from '../../constants';

import 'react-day-picker/lib/style.css'

class DateRange extends Component {
  state = {
    from: null,
    to: null
  }

  handleDayClick = (day) => {
    this.setState(DateUtils.addDayToRange(day, this.state));
    this.props.dispatch(
      {
        type: DATE_RANGE,
        'asdasda': 123123,
      }
    );
  }

  render() {
    const {from, to} = this.state
    const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`
    return (
      <div className="date-range">
        <DayPicker
          ref="daypicker"
          selectedDays={day => DateUtils.isDayInRange(day, {from, to})}
          onDayClick={this.handleDayClick}
        />
        {selectedRange}
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
    dateRange: state
  }
}

export default connect(() => {
  return {};
})(DateRange);