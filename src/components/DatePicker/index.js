import React from 'react';
import PropTypes from 'prop-types'

import moment from 'moment'
import DayPicker, {DateUtils} from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import './style.css'

export default class DatePicker extends React.Component {

    static propTypes = {
        selectDateHandler: PropTypes.func.isRequired
    };

    state = {
        from: null,
        to: null
    };

    handleDayClick = day => {

        day.setHours(0);
        day.setMinutes(0);

        const range = DateUtils.addDayToRange(day, this.state);
        this.setState(range);

        this.props.selectDateHandler(range);
    };

    resetSelectedDate(event) {

        event.preventDefault();
        this.setState({ from: null, to: null });

        this.props.selectDateHandler({ from: null, to: null });
    }

    render() {

        const
            {from, to} = this.state,
            formattedDateFrom = this.state.from && moment(this.state.from).format('Do MMMM YYYY, h:mm:ss a'),
            formattedDateTo = this.state.to && ' --> ' + moment(this.state.to).format('Do MMMM YYYY, h:mm:ss a');

        return <div>
            <div>
                <span className="selectedDate">{formattedDateFrom}</span>
                <span className="selectedDate">{formattedDateTo}</span>
                {this.state.from &&
                <button className="resetDateButton" onClick={this.resetSelectedDate.bind(this)}>Сбросить дату</button>}
            </div>
            <div>
                <DayPicker
                    month={new Date(2016, 3)}
                    numberOfMonths={3}
                    selectedDays={[from, {from, to}]}
                    onDayClick={this.handleDayClick}
                    fixedWeeks
                />
            </div>
        </div>
    }
}