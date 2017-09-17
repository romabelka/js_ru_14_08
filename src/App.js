import React, {Component, PropTypes} from 'react'
import Root from './components/Root'
import {Provider} from 'react-redux'
import {ConnectedRouter} from 'react-router-redux'
import store from './store'
import history from './history'
import dictionary from './dictionary'

export default class App extends Component {

    state = {
        lang: 'en'
    }

    static childContextTypes = {
        user: PropTypes.string,
        lang: PropTypes.string,
        dictionary: PropTypes.object,
    }

    getChildContext() {
        return {
            user: this.state.username,
            lang: this.state.lang,
            dictionary: dictionary,
        }
    }

    setLang = lang => event => {
        this.setState({lang})
    }

    render() {
        return (
            <Provider store = {store}>
                <ConnectedRouter history = {history}>
                    <Root lang={this.state.lang} setLang={this.setLang} />
                </ConnectedRouter>
            </Provider>
        )

    }
}
