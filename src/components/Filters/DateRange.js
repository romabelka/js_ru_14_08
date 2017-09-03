import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import { connect } from 'react-redux'
import { selectedDate } from '../../AC'

import 'react-day-picker/lib/style.css'

class DateRange extends Component {
    handleDayClick = (day) => {
        const { selectedDate, date } = this.props

        selectedDate(DateUtils.addDayToRange(day, date))
    }

    render() {
        const { from, to } = this.props.date
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

export default connect(state => ({
    date: state.selectedDate
}), { selectedDate })(DateRange)