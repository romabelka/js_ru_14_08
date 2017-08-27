import React, {Component} from 'react'
import ArticleList from './components/ArticleList'
import ArticleChart from './components/ArticleChart'
import UserForm from './components/UserForm'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import DayPicker, { DateUtils } from 'react-day-picker'
import 'react-day-picker/lib/style.css'

export default class App extends Component {
    state = {
        selected: null,
        from: null,
        to: null
    }

    handleSelectionChange = selected => this.setState({ selected })

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
        const { from, to } = this.state
        const {articles} = this.props
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))
        return (
            <div>
                <h2>Menu</h2>
                <div>
                    <h1>News App</h1>
                    <div className="RangeExample">
        {!from && !to && <p>Please select the <strong>first day</strong>.</p>}
        {from && !to && <p>Please select the <strong>last day</strong>.</p>}
        {from &&
          to &&
          <p>
            You chose from
            {' '}
            {from.toLocaleDateString()}
            {' '}
            to
            {' '}
            {to.toLocaleDateString()}
            .
          </p>}
        <DayPicker
          numberOfMonths={2}
          selectedDays={[from, { from, to }]}
          onDayClick={this.handleDayClick}
          fixedWeeks
        />
      </div>
                    <UserForm />
                    <Select options = {options} value = {this.state.selected}
                            onChange = {this.handleSelectionChange}
                            multi
                    />
                    <ArticleList articles = {articles} defaultOpenId={articles[0].id} />
                    <ArticleChart articles = {articles} />
                </div>
            </div>
        )

    }
}