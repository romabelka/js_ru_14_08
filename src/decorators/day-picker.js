import React from 'react';
import moment from 'moment';
import DayPicker, {DateUtils} from 'react-day-picker';
import 'react-day-picker/lib/style.css';

export default class DayPick extends React.Component {
  state = {
    from: null,
    to: null,
  };
  handleDayClick = (day) => {
    const range = DateUtils.addDayToRange(day, this.state);
    console.log(range);
    this.setState(range);
  };
  handleResetClick = () => {
    this.setState({
      from: null,
      to: null,
    });
  };

  render() {
    const {from, to} = this.state;
    return (
      <div className="RangeExample">
        {!from && !to && <p><b>Первый день</b>.</p>}
        {from && !to && <p><b>Последний день</b>.</p>}
        {from && to &&
        <p>{moment(from).format('L')} <b>до</b> {moment(to).format('L')}.
          <button onClick={this.handleResetClick}>Сбросить</button>
        </p>}
        <DayPicker
          numberOfMonths={2}
          selectedDays={[from, {from, to}]}
          onDayClick={this.handleDayClick}
          fixedWeeks
        />
      </div>
    );
  }
}