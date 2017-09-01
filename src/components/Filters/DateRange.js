import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import PropTypes from 'prop-types'
import 'react-day-picker/lib/style.css'

class DateRange extends Component {
    static propTypes = {
        from: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
        to: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
        handleChange: PropTypes.func.isRequired
    }

    handleDayClick = (day) => {
        const {from, to, handleChange} = this.props
        handleChange(DateUtils.addDayToRange(day, {from, to}))
    }

    render() {
        const { from, to } = this.props
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

export default DateRange