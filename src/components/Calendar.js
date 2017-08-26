import React from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import 'react-day-picker/lib/style.css'


export default class Calendar extends React.Component {
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
    return (
      <div className="RangeExample">
        {!from && !to && <p>Please select the <strong>first day</strong>.</p>}
        {from && !to && <p>Please select the <strong>last day</strong>.</p>}
        {from && to && <p>You chose  {this.moment(from, to)}.
        <br /><a href="." onClick={this.handleResetClick}>Reset</a></p>}

        <DayPicker
          numberOfMonths={2}
          selectedDays={[from, { from, to }]}
          onDayClick={this.handleDayClick}
          fixedWeeks
        />
      </div>
    );
  }

  moment(from, to) {
    let counterDay =  (((+to) - (+from)) / 1000 / 60 / 60 / 24) + 1;
    return (<span>You choose: <b>{counterDay}</b> days<br />
    From <b>{getDaeteForCalendar(from)}</b><br />
    To <b>{getDaeteForCalendar(to)}</b></span>);

    function getDaeteForCalendar(date) {
      return (date.getDate() + ' / ' + (date.getMonth() + 1) + " / " + date.getFullYear())
    }
  }


}
