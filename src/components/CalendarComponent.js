import React from 'react';
import DayPicker, {DateUtils} from 'react-day-picker'
import 'react-day-picker/lib/style.css'

export default class CalendarComponent extends React.Component {

    state = {
        from: null,
        to: null
    };

    handleDayClick = day => {
        let range = DateUtils.addDayToRange(day, this.state);
        this.setState(range);
    };

    handleReset(e) {
        e.preventDefault();
        this.setState({from: null, to: null});
    };

    handleToday(e) {
        e.preventDefault();
        let from = new Date();
        let to;

        this.setState({from, to});
    };


    render() {
        let {from, to} = this.state;

        return (
            <div>
                <DayPicker
                    refs="picker"
                    showWeekNumbers
                    enableOutsideDays
                    numberOfMonths={2}
                    selectedDays={[from, {from,  to}]}
                    onWeekClick={() => console.log('onWeekClick')} /* заглушка */
                    onDayClick={this.handleDayClick}
                />

                <div>
                    {
                        from
                            ? `Начнём с ${from.toLocaleDateString()}`
                            : 'Выберите начальную дату'
                    }
                    {
                        to
                            ? ` и до ${to.toLocaleDateString()}`
                            : ''

                    }
                    <br/>
                    <a href="#" onClick={e => this.handleToday(e)}> Сегодня</a>
                    <br/>
                    <a href="#" onClick={e => this.handleReset(e)}> Сбросить</a>
                </div>
            </div>
        )
    }

}