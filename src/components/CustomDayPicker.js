import React , {Component} from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';

import 'react-day-picker/lib/style.css';

const initialState = {
  from: null,
  to: null,
  enteredTo: null, // Keep track of the last day for mouseEnter.
};

function isSelectingFirstDay(from, to, day) {
  const firstDayIsNotSelected = !from;
  const selectedDayIsBeforeFirstDay = from && DateUtils.isDayBefore(day, from);
  const rangeIsSelected = from && to;
  return (
    firstDayIsNotSelected || selectedDayIsBeforeFirstDay || rangeIsSelected
  );
}

export default class CustomDayPicker extends Component {
    state = {
        from: null,
        to: null,
    }

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
        return (
            <div>
                {!from && !to && <p>Please select the <strong>first day</strong>.</p>}
                {from && !to && <p>Please select the <strong>last day</strong>.</p>}
                {from && to &&
                    <p>
                        {`You chose from ${this.state.from} to ${to}`}
                        <a href="." onClick={this.handleResetClick}>Reset</a>
                    </p>
                }
                <DayPicker
                    numberOfMonths={1}
                    selectedDays={[from, { from, to }]}
                    onDayClick={this.handleDayClick}
                    fixedWeeks
                    />
            </div>
        );
    }
}