import React, {Component} from 'react'
import {Provider} from 'react-redux'
import store from './store'
import Root from './components/Root'


export default class App extends Component {
    render() {
        let { articles } = this.props;
        return (
          <Provider store = {store}>
            <Root articles={articles}/>
          </Provider>
        )
    }
}
