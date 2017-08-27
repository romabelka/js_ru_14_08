import React, {Component} from 'react'
import ArticleList from './components/ArticleList'
import ArticleChart from './components/ArticleChart'
import UserForm from './components/UserForm'
import Select from 'react-select'
import 'react-select/dist/react-select.css'

import DayPicker, {DateUtils} from 'react-day-picker';
import "react-day-picker/lib/style.css";
import moment from 'moment'

export default class App extends Component {
    state = {
        selected: null,
        from: null,
        to: null
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
    handleSelectionChange = selected => this.setState({selected})

    render() {
        const {articles} = this.props;
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }));
        const {from, to} = this.state;

        console.log(from)
        return (
            <div>
                <h2>Menu</h2>
                <div>
                    <h1>News App</h1>
                    <UserForm/>
                    <Select options={options} value={this.state.selected}
                            onChange={this.handleSelectionChange}
                            multi
                    />

                    <div className="RangeExample">
                        <p>Выбранные даты с {" "}
                            {
                                from &&
                                <span>
                                    {moment(from).format('LL')}
                                </span>
                            }
                            {" "} по {" "}
                            {
                                to &&
                                <span>
                                    {moment(to).format('LL')}
                                </span>
                            }
                            {' '}<a href="." onClick={this.handleResetClick}>Сбросить даты</a>
                        </p>


                        <DayPicker
                            numberOfMonths={2}
                            selectedDays={[from, {from, to}]}
                            onDayClick={this.handleDayClick}
                            fixedWeeks
                        />
                    </div>


                    <ArticleList articles={articles} defaultOpenId={articles[0].id}/>
                    <ArticleChart articles={articles}/>
                </div>
            </div>
        )

    }


}