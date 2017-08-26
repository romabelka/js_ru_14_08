import React from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';

import 'react-day-picker/lib/style.css';

export default class Example extends React.Component {
    state = {
        from: null,
        to: null,
    };

    handleDayClick = day => {
        const range = DateUtils.addDayToRange(day, this.state);
        this.setState(range);
    };

    handleResetClick = e => {
        e.preventDefault();
        this.setState({
            from: null,
            to: null,
        });
    };

    render() {
        const { from, to } = this.state;
        let startDate = from ? <p>From: {from.toString()}</p> : null;
        let endDate = to ? <p>To: {to.toString()}</p> : null;

        return (
            <div className="datepicker">
                <DayPicker
                    numberOfMonths={2}
                    selectedDays={[from, { from, to }]}
                    onDayClick={this.handleDayClick}
                    fixedWeeks
                />
                {startDate}
                {endDate}
            </div>
        );
    }
}
