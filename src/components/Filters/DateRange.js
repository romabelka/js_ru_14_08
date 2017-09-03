import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import 'react-day-picker/lib/style.css'
import {connect} from 'react-redux'
import {filterByDate} from '../../AC'

class DateRange extends Component {
    handleDayClick = (day) => {
        this.props.dispatch(
            filterByDate(DateUtils.addDayToRange(day, this.props))
        )
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

const mapStateToProps = state => {
    return {
        from: state.dateFilter.from,
        to: state.dateFilter.to
    }
}

export default connect(mapStateToProps)(DateRange)