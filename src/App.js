import React, {Component} from 'react'
import ArticleList from './components/ArticleList'
import ArticleChart from './components/ArticleChart'
import UserForm from './components/UserForm'
import Filters from './components/Filters'
import 'react-select/dist/react-select.css'

export default class App extends Component {
    render() {
        const {articles} = this.props
        return (
            <div>
                <h2>Menu</h2>
                <div>
                    <h1>News App</h1>
                    <UserForm />
                    <Filters articles={articles}/>
                    <ArticleList articles = {articles} defaultOpenId={articles[0].id} />
                    <ArticleChart articles = {articles} />
                </div>
            </div>
        )

    }
}