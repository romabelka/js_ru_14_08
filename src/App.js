import React, {Component} from 'react'
import ArticleList from './components/ArticleList'
import ArticleChart from './components/ArticleChart'
import UserForm from './components/UserForm'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import Calendar from './components/Calendar'


export default class App extends Component {
    state = {
        selected: null
    }

    handleSelectionChange = selected => this.setState({ selected })

    render() {
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
                    <UserForm />
                    <br />
                    <Select options = {options} value = {this.state.selected}
                            onChange = {this.handleSelectionChange}
                            multi
                    />
                    <br />
                    <ArticleList articles = {articles} defaultOpenId={articles[0].id} />
                    <ArticleChart articles = {articles} />
                </div>
                <div>
                  <Calendar />
                </div>
            </div>
        )

    }
}
