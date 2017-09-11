import React, {Component} from 'react'
import Root from './components/Root'
import {Provider} from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'
import store from './store'

export default class App extends Component {
    render() {
        return (
            <Provider store = {store}>
                <Router>
                    <Root />
                </Router>
            </Provider>
        )

    }
}