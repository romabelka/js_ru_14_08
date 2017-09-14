import React, {Component} from 'react'
import ArticlesPage from './Routes/ArticlesPage'
import UserForm from './UserForm'
import Filters from './Filters'
import Counter from './Counter'
import CommentsPage from './Routes/CommentsPage'
import {Route, Link, Switch, Redirect} from 'react-router-dom'
import NotFoundPage from './Routes/NotFoundPage'

export default class Root extends Component {
    render() {
        return (
            <div>
                <h2>Menu</h2>
                <div>
                    <div><Link to="/counter">counter</Link></div>
                    <div><Link to="/articles">articles</Link></div>
                    <div><Link to="/filters">filters</Link></div>
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