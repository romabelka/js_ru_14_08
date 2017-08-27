import React, {Component} from 'react'
import DayPicker, {DateUtils} from 'react-day-picker';
import PropTypes from 'prop-types'

import 'react-day-picker/lib/style.css';

const moment = require('moment');

class DateRange extends Component {
    static propTypes = {
        dateRange: PropTypes.object,
        handleDayClick: PropTypes.func,
    };

    handleDayClickInternal = day => {
        const range = DateUtils.addDayToRange(day, this.props.dateRange);
        this.props.handleDayClick(range);
    }

    getRange = () => {
        const {from, to} = this.props.dateRange

        console.log(from, to);
        return <div>

            {!from && !to && <p>Please select the <strong>first day</strong>.</p>}
            {from && !to && <p>Please select the <strong>last day</strong>.</p>}
            {from &&
            to &&
            <p>
                You chose from
                {' '}
                {moment(from).format('L')}
                {' '}
                to
                {' '}
                {moment(to).format('L')}
                .
                {' '}
            </p>}
        </div>
    }

    render() {
        const {from = null, to = null} = this.props.dateRange

        return <div>
            <DayPicker
                numberOfMonths={2}
                selectedDays={[from, {from, to}]}
                onDayClick={this.handleDayClickInternal}
                fixedWeeks
            />
            {this.getRange()}
        </div>
    }

}

export default DateRange