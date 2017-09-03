import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import { connect } from 'react-redux'
import {selectedDate} from '../../AC'

import 'react-day-picker/lib/style.css'

class DateRange extends Component {

    handleDayClick = (day) => {
        const { selectedDate, from, to } = this.props        
        const range = DateUtils.addDayToRange(day, {from, to})
        selectedDate(range)
    }

    render() {
        const { from, to } = this.props
        
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
    from: state.dates.from,
    to: state.dates.to,
}), {selectedDate})(DateRange)