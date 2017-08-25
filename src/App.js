import React, {Component} from 'react'
import ArticleList from './components/ArticleList'
import ArticleChart from './components/ArticleChart'
import UserForm from './components/UserForm'
import Select from 'react-select'
import DayPicker, { DateUtils } from 'react-day-picker'
import 'react-day-picker/lib/style.css';
import 'react-select/dist/react-select.css'
import  moment from 'moment'

export default class App extends Component {
    state = {
        selected: null,
        from: null,
        to: null,
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
        const {articles} = this.props
        const {from, to} = this.state
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))
        return (
            <div>
                <h2>Menu</h2>
                <div>
                    <h1>News App</h1>
                    <UserForm />
                    <Select options = {options} value = {this.state.selected}
                            onChange = {this.handleSelectionChange}
                            multi
                    />
                    <DayPicker 
                      numberOfMonths={1}
                      selectedDays={[from, { from, to }]}
                      onDayClick={this.handleDayClick}
                      fixedWeeks
                    />
                    <div>
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
                        {' '}<a href="." onClick={this.handleResetClick}>Reset</a>
                      </p>}
                      </div>
                    <ArticleList articles = {articles} defaultOpenId={articles[0].id} />
                    <ArticleChart articles = {articles} />
                </div>
            </div>
        )

    }
}