import React, {Component} from 'react'
import ArticleList from './ArticleList'
import UserForm from './UserForm'
import Filters from './Filters'
import Counter from './Counter'
import {Route, Link} from 'react-router-dom'

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
                    <Route path="/counter" component={Counter} />
                    <Route path="/filters" component={Filters} />
                    <Route path="/articles" component={ArticleList} />
                </div>
            </div>
        )

    }
}