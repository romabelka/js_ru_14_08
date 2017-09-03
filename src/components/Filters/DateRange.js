import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DayPicker, { DateUtils } from 'react-day-picker'
import {connect} from 'react-redux'
import {changeDateRange} from '../../AC'
import 'react-day-picker/lib/style.css'

class DateRange extends Component {

    static propTypes = {
        dateRange: PropTypes.shape({
            from: PropTypes.instanceOf(Date),
            to: PropTypes.instanceOf(Date),
         }).isRequired,
    };

    handleDayClick = (day) => {
        const {changeDateRange, dateRange} = this.props;
        changeDateRange(DateUtils.addDayToRange(day, dateRange))
    };

    render() {
        const { from, to } = this.props.dateRange;
        const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`;
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
    dateRange: state.dateRange
}), { changeDateRange })(DateRange)