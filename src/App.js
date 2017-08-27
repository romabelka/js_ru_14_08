import React, {Component} from 'react'
import ArticleList from './components/ArticleList'
import ArticleChart from './components/ArticleChart'
import UserForm from './components/UserForm'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import DayPicker, { DateUtils } from 'react-day-picker';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import moment from 'moment';

export default class App extends Component {
    state = {
        selected: null,
        from: false,
        to: false
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

        const { selected, from, to } = this.state;

        return (
            <div>
                <h2>Menu</h2>
                <div>
                    <h1>News App</h1>
                    {/* <UserForm /> */}

                    <div>
                        C <input name="from" value={from?moment(from).format('DD/MM/YYYY'):''} placeholder="От"/>
                        по <input name="from" value={to?moment(to).format('DD/MM/YYYY'):''} placeholder="До"/>  
                    </div>

                    <DayPicker 
                        numberOfMonths={2}
                        selectedDays={[from, { from, to }]}
                        onDayClick={this.handleDayClick}
                        fixedWeeks 
                        format="DD/MM/YYYY"
                    />

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