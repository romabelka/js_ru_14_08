import React, {Component} from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import 'react-day-picker/lib/style.css'

export default class MyDayPicker extends Component {
    state = {
        from: null,
        to: null,
    }

    handleDayClick = day => {
        const range = DateUtils.addDayToRange(day, this.state)
        this.setState(range)
    };
    
    handleResetClick = e => {
        e.preventDefault()
        this.setState({
            from: null,
            to: null,
        })
    };

    render() {
        const {from, to} = this.state
        return (
            <div>
                <div>
                    {!from && !to && <p>Please select the <strong>first day</strong>.</p>}
                    {from && !to && <p>Please select the <strong>last day</strong>.</p>}
                    {from && to &&
                        <p>
                            You chose from {from.toString()} to {to.toString()}.<br/>
                            <span style={{cursor: 'pointer', border: '1px solid red'}} href="." onClick={this.handleResetClick}>Reset</span>
                        </p>
                    }
                </div>

                <DayPicker
                    numberOfMonths={2}
                    selectedDays={[from, { from, to }]}
                    onDayClick={this.handleDayClick}
                    fixedWeeks
                />
            </div>
        )
    }
}