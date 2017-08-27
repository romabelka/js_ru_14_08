import React, {Component} from 'react'
import ArticleList from './components/ArticleList'
import ArticleChart from './components/ArticleChart'
import UserForm from './components/UserForm'
import Select from 'react-select'
import 'react-select/dist/react-select.css'

import DayPicker, {DateUtils} from 'react-day-picker';

import 'react-day-picker/lib/style.css';

export default class App extends Component {
    state = {
        selected: null,
        dateRange: {
            from: null,
            to: null
        }
    };

    handleSelectionChange = selected => this.setState({selected});

    handleDayClick = day => {
        const dateRange = DateUtils.addDayToRange(day, this.state.dateRange);
        this.setState({dateRange});
    };

    handleResetClick = e => {
        e.preventDefault();
        this.setState({
                          dateRange: {
                              from: null,
                              to: null
                          }
                      });
    };

    render() {
        const {articles} = this.props;
        const {from, to} = this.state.dateRange;
        console.log("Current data range", this.state.dateRange);
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }));
        return (
            <div>
                <div>
                    <DayPicker
                        selectedDays={[from, {from, to}]}
                        onDayClick={this.handleDayClick}
                        fixedWeeks
                    />
                    {!from && !to && <p>Please select the <strong>first day</strong>.</p>}
                    {from && !to && <p>Please select the <strong>last day</strong>.</p>}
                    {from &&
                     to &&
                     <p>
                         You chose from
                         {' '}
                         {this.dateToYMD(from)}
                         {' '}
                         to
                         {' '}
                         {this.dateToYMD(to)}
                         .
                         {' '}<a href="." onClick={this.handleResetClick}>Reset</a>
                     </p>}
                </div>
                <h2>Menu</h2>
                <div>
                    <h1>News App</h1>
                    <UserForm />
                    <Select options={options} value={this.state.selected}
                            onChange={this.handleSelectionChange}
                            multi
                    />
                    <ArticleList articles={articles} defaultOpenId={articles[0].id}/>
                    <ArticleChart articles={articles}/>
                </div>
            </div>
        )

    }

    dateToYMD(date) {
        let d = date.getDate();
        let m = date.getMonth() + 1;
        let y = date.getFullYear();
        return '' + y + '-' + (m <= 9 ? '0' + m : m) + '-' + (d <= 9 ? '0' + d : d);
    }
}