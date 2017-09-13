import React, { Component } from 'react'
import ArticlesPage from './Routes/ArticlesPage'
import UserForm from './UserForm'
import Filters from './Filters'
import Counter from './Counter'
import CommentsPagination from './CommentsPagination'
import { Route, Link, Switch } from 'react-router-dom'

export default class Root extends Component {
    render() {
        return (
            <div>
                <h2>Menu</h2>
                <div>
                    <div><Link to="/counter">counter</Link></div>
                    <div><Link to="/articles">articles</Link></div>
                    <div><Link to="/filters">filters</Link></div>
                    <div><Link to="/comments">comments</Link></div>
                </div>
                <div>
                    <h1>News App</h1>
                    <UserForm />
                    <Switch>
                        <Route path="/counter" component={Counter} exact />
                        <Route path="/filters" component={Filters} />
                        <Route path="/articles/new" render={this.getArticleForm} />
                        <Route path="/articles" component={ArticlesPage} />
                        <Route path="/comments/:pageNumber?" component={CommentsPagination} />
                        {/* <Route path="/comments/" render={this.getCommentsPagination} />
                        <Route path="/comments/" component={CommentsPagination} /> */}
                    </Switch>
                    
                </div>
            </div>
        )

    }

    getArticleForm = () => <h2>New Article form</h2>
    getCommentsPagination = () => <CommentsPagination/>
}