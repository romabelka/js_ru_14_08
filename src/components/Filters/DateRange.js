import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import {connect} from 'react-redux'
import {filterArticles} from '../../AC'

import 'react-day-picker/lib/style.css'

class DateRange extends Component {

    handleDayClick = (day) => {
        this.props.filterArticles(DateUtils.addDayToRange(day, this.props.filtersOptions));
    };

    render() {
        const { from, to } = this.props.filtersOptions;
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
    filtersOptions: state.filters
}), { filterArticles })(DateRange)