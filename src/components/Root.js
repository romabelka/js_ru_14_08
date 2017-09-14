import React, {Component} from 'react'
import ArticlesPage from './Routes/ArticlesPage'
import UserForm from './UserForm'
import Filters from './Filters'
import Counter from './Counter'
import CommentsPage from './Routes/CommentsPage'
import {Route, Link, NavLink, Switch, Redirect} from 'react-router-dom'
import NotFoundPage from './Routes/NotFoundPage'

export default class Root extends Component {
    render() {
        return (
            <div>
                <h2>Menu</h2>
                <div>
                    <div><NavLink to="/counter" activeStyle = {{color: 'red'}}>counter</NavLink></div>
                    <div><NavLink to="/articles" activeStyle = {{color: 'red'}}>articles</NavLink></div>
                    <div><NavLink to="/filters" activeStyle = {{color: 'red'}}>filters</NavLink></div>
                </div>
                <div>
                    <h1>News App</h1>
                    <UserForm />
                    <Switch>
                        <Redirect from="/" exact to="/articles" />
                        <Route path="/counter" component={Counter} exact />
                        <Route path="/filters" component={Filters} />
                        <Route path="/articles/new" render={this.getArticleForm} />
                        <Route path="/article" to="/articles" />
                        <Route path="/articles" component={ArticlesPage} />
                        <Route path='/comments' component={CommentsPage}/>
                        <Route path="*" component={NotFoundPage} />
                    </Switch>
                </div>
            </div>
        )

    }

    getArticleForm = () => <h2>New Article form</h2>
}