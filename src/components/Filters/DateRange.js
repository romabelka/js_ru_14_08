import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import { connect } from 'react-redux'
import {selectedDate} from '../../AC'

import 'react-day-picker/lib/style.css'

class DateRange extends Component {

    handleDayClick = (day) => {
        console.log('day: ', day);
        const {selectedDate, range } = this.props 
        const dateRange = DateUtils.addDayToRange(day, range)
        selectedDate(dateRange)
    }

    render() {
        const { from, to } = this.props.range
        console.log('this.props: ', this.props.range);
        // console.log('to: ', to);
        // console.log('from: ', from);
        
        
        const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`
        return (
            <div className="date-range">
                <DayPicker
                    ref="daypicker"
                    selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
                    onDayClick={ this.handleDayClick }
                />
                {selectedRange}
            </div>
        );
    }

}

export default connect(state=>({
    range: state.filters.dateRange
}), {selectedDate})(DateRange)