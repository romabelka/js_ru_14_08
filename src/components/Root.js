import React, {Component, PropTypes} from 'react'
import ArticlesPage from './Routes/ArticlesPage'
import UserForm from './UserForm'
import Filters from './Filters'
import Counter from './Counter'
import CommentsPage from './Routes/CommentsPage'
import {Route, Link, NavLink, Switch, Redirect} from 'react-router-dom'
import NotFoundPage from './Routes/NotFoundPage'
import Menu, {MenuItem} from './Menu'
import LangProvider from './LangProvider'

export default class Root extends Component {
    state = {
        username: '',
        language: 'ru'
    }

    static childContextTypes = {
        user: PropTypes.string
    }

    getChildContext() {
        return {
            user: this.state.username
        }
    }

    changeLanguage = language => ev => this.setState({ language })

    render() {
        return (
            <LangProvider language={this.state.language}>
                <div>
                    <h2>Menu</h2>
                    <ul>
                        <li onClick = {this.changeLanguage('en')}>English</li>
                        <li onClick = {this.changeLanguage('ru')}>Russian</li>
                    </ul>
                    <Menu>
                        <MenuItem link="counter"/>
                        <MenuItem link="articles"/>
                        <MenuItem link="filters"/>
                    </Menu>
                    <div>
                        <h1>News App</h1>
                        <UserForm value={this.state.username} onChange={this.handleUserChange}/>
                        <Switch>
                            <Redirect from="/" exact to="/articles"/>
                            <Route path="/counter" component={Counter} exact/>
                            <Route path="/filters" component={Filters}/>
                            <Route path="/articles/new" render={this.getArticleForm}/>
                            <Route path="/article" to="/articles"/>
                            <Route path="/articles" component={ArticlesPage}/>
                            <Route path='/comments' component={CommentsPage}/>
                            <Route path="/error" render={() => <h1>Error</h1>}/>
                            <Route path="*" component={NotFoundPage}/>
                        </Switch>
                    </div>
                </div>
            </LangProvider>
        )

    }

    handleUserChange = (username) => this.setState({username})

    getArticleForm = () => <h2>New Article form</h2>
}