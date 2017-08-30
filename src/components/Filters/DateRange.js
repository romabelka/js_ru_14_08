import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import {connect} from 'react-redux'
import {selectRange, setVisibilityFilter} from '../../AC'

import 'react-day-picker/lib/style.css'

class DateRange extends Component {

    handleDayClick = day => {
        const {selectRange, dateRange, setVisibilityFilter} = this.props
        const { from, to } = this.props.dateRange
        const range=DateUtils.addDayToRange(day, { from, to })
        selectRange(range)
        setVisibilityFilter()
    }

    render() {
        const { from, to } = this.props.dateRange
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

export default connect(state => {
    return {
        dateRange: state.dateRange
    }
}, { selectRange, setVisibilityFilter })(DateRange)