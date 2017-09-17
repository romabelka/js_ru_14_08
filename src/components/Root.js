import React, {Component, PropTypes} from 'react'
import ArticlesPage from './Routes/ArticlesPage'
import UserForm from './UserForm'
import Filters from './Filters'
import Counter from './Counter'
import CommentsPage from './Routes/CommentsPage'
import {Route, Link, NavLink, Switch, Redirect} from 'react-router-dom'
import NotFoundPage from './Routes/NotFoundPage'
import Menu, { MenuItem } from './Menu'
import {languages} from '../i18n';
import LanguageSwitcher from './LanguageSwitcher'


export default class Root extends Component {
    state = {
        username: '',
        language: 'EN'
    }

    static childContextTypes = {
        user: PropTypes.string,
        language: PropTypes.object
    }

    getChildContext() {
        return {
            user: this.state.username,
            language: languages[this.state.language]
        }
    }

    render() {
        console.log('---', 1);
        let lang = languages[this.state.language];
        return (
            <div>
                <LanguageSwitcher changeLang={this.changeLang} selected={this.state.language}/>
                <Menu>
                    <MenuItem link="counter" text={lang.counter}/>
                    <MenuItem link="articles" text={lang.articles} />
                    <MenuItem link="filters" text={lang.filters} />
                </Menu>
                <div>
                    <h1>{lang.mainTitle}</h1>
                    <UserForm value = {this.state.username} onChange = {this.handleUserChange}/>
                    <Switch>
                        <Redirect from="/" exact to="/articles" />
                        <Route path="/counter" component={Counter} exact />
                        <Route path="/filters" component={Filters} />
                        <Route path="/articles/new" render={this.getArticleForm} />
                        <Route path="/article" to="/articles" />
                        <Route path="/articles" component={ArticlesPage} />
                        <Route path='/comments' component={CommentsPage}/>
                        <Route path="/error" render={() => <h1>Error</h1>} />
                        <Route path="*" component={NotFoundPage} />
                    </Switch>
                </div>
            </div>
        )

    }

    handleUserChange = (username) => this.setState({ username })

    changeLang = (language) => this.setState({language})

    getArticleForm = () => <h2>New Article form</h2>
}