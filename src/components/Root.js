import React, {Component, PropTypes} from 'react'
import ArticlesPage from './Routes/ArticlesPage'
import UserForm from './UserForm'
import Filters from './Filters'
import Counter from './Counter'
import CommentsPage from './Routes/CommentsPage'
import {Route, Link, NavLink, Switch, Redirect} from 'react-router-dom'
import NotFoundPage from './Routes/NotFoundPage'
import Menu, { MenuItem } from './Menu'

export default class Root extends Component {
    state = {
        username: ''
    }

    static contextTypes = {
        language: PropTypes.string,
        dictionary: PropTypes.object
    }

    static childContextTypes = {
        user: PropTypes.string
    }

    getChildContext() {
        return {
            user: this.state.username
        }
    }

    render() {
        // //console.log('---', 1)
        const { language, dictionary } = this.context;

        return (
            <div>
                <h2>{ dictionary.menu[language] }</h2>
                <Menu>
                    <MenuItem link="counter" />
                    <MenuItem link="articles" />
                    <MenuItem link="filters" />
                </Menu>
                <div>
                    <h1>{ dictionary.new_app[language] }</h1>
                    <UserForm value = {this.state.username} onChange = {this.handleUserChange}/>
                    <Switch>
                        <Redirect from="/" exact to="/articles" />
                        <Route path="/counter" component={Counter} exact />
                        <Route path="/filters" component={Filters} />
                        <Route path="/articles/new" render={this.getArticleForm} />
                        <Route path="/article" to="/articles" />
                        <Route path="/articles" component={ArticlesPage} />
                        <Route path='/comments' component={CommentsPage}/>
                        <Route path="/error" render={() => <h1>{ dictionary.error[language] }</h1>} />
                        <Route path="*" component={NotFoundPage} />
                    </Switch>
                </div>
            </div>
        )

    }

    handleUserChange = (username) => this.setState({ username })

    getArticleForm = () => <h2>{ dictionary.new_article_form[language] }</h2>
}