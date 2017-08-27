import React, {Component} from 'react'
import DayPickerComponent, {DateUtils} from 'react-day-picker'
import 'react-day-picker/lib/style.css'

export default class DayPicker extends React.Component {
    state = {
        from: null,
        to: null
    }

    handleDayClick = day => {
        const range = DateUtils.addDayToRange(day, this.state)
        this.setState(range)
    };

    handleResetClick = () => {
        this.setState({
            from: null,
            to: null
        })
    }

    render() {
        const {from, to} = this.state
        return (
            <div>
                <DayPickerComponent
                    selectedDays={[from, {from, to}]}
                    onDayClick={this.handleDayClick}
                />
                {from && to &&
                    <div>
                        <span>You chose from {from.toDateString()} to {to.toDateString()}. </span>
                        <button onClick={this.handleResetClick}>Reset</button>
                    </div>}
            </div>
        )
    }
}