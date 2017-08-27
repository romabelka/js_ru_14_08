
import React, {Component} from 'react'
import ArticleList from './components/ArticleList'
import ArticleChart from './components/ArticleChart'
import UserForm from './components/UserForm'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import 'react-day-picker/lib/style.css'
import DayPicker, { DateUtils } from 'react-day-picker'
import moment from 'moment'


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

    render() {
        const {articles} = this.props
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))
        const { from, to } = this.state;
        return (
            <div>
                <div>
                    <DayPicker
                        selectedDays={[from, { from, to }]}
                        onDayClick={this.handleDayClick}
                        fixedWeeks
                    />
                    {from && to &&
                        <p>
                            Начальная дата: {moment(from).format('L') }<br/>
                            Конечная дата: {moment(to).format('L') }<br/>
                        </p>
                    }
                </div>   
                <h2>Menu</h2>
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