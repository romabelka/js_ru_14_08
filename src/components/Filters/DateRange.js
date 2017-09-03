import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import {connect} from 'react-redux'
import {pickDate} from '../../AC'

import 'react-day-picker/lib/style.css'

class DateRange extends Component {

    handleDayClick = (day) => {
        this.props.dispatch(
            pickDate(
                DateUtils.addDayToRange(day, this.props)
            )
        );
    };

    render() {
        const { from, to } = this.props;
        const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`
        return (
            <div className="date-range">
                <DayPicker
                    ref="daypicker"
                    selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
                    // для удобства, т.к. все статьи оттуда
                    numberOfMonths={2}
                    initialMonth={new Date(2016, 0, 1)}
                    onDayClick={ this.handleDayClick }
                />
                {selectedRange}
            </div>
        );
    }

}

let mapStateToProps = state => {
    let {from, to} = state.dateRange;
    return {from, to};
};

export default connect(mapStateToProps)(DateRange);