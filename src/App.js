import React, {Component} from 'react'
import ArticleList from './components/ArticleList'
import ArticleChart from './components/ArticleChart'
import UserForm from './components/UserForm'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import DayPicker, {DateUtils} from 'react-day-picker'
import 'react-day-picker/lib/style.css'

export default class App extends Component {
    state = {
        selected: null,
        from: null,
        to: null
    }

    handleSelectionChange = selected => this.setState({ selected })

    handleDayClick = day => {
        const range = DateUtils.addDayToRange(day, this.state)
        this.setState(range)
    };

    render() {
        const {articles} = this.props
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))
        const {from, to} = this.state
        return (
            <div>
                <h2>Menu</h2>
                <div className="RangeExample">
                    {from && <p>From <strong>{this.state.from.toString()}</strong>.</p>}
                    {to && <p>To <strong>{this.state.to.toString()}</strong>.</p>}
                    <DayPicker
                      numberOfMonths={2}
                      selectedDays={[from, { from, to }]}
                      onDayClick={this.handleDayClick}
                      fixedWeeks
                    />
                </div>
                <div>
                    <h1>News App</h1>
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