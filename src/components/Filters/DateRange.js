import React, { Component } from 'react'
import {connect} from 'react-redux';
import DayPicker, { DateUtils } from 'react-day-picker'
import {setDate} from '../../AC'

import 'react-day-picker/lib/style.css'

class DateRange extends Component {

    handleDayClick = (day) => {
        let {from , to} = this.props;

        const range = DateUtils.addDayToRange(day, {from, to});

        this.props.setDate(range);
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

export default connect(
    state => ({
        from: state.filters.range.from,
        to: state.filters.range.to,
    }),
    {setDate}
)(DateRange);
