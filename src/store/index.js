import {createStore, compose, applyMiddleware} from 'redux'
import reducer from '../reducer'
import logger from '../middlewares/logger'
import idgen from '../middlewares/idgen'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose

const enhancer = composeEnhancers(applyMiddleware(logger, idgen))

const store = createStore(reducer, enhancer)
window.store = store

export default store
