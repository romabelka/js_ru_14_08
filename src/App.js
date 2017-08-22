import React from 'react'
import PropTypes from 'prop-types'
import ArticleList from './components/ArticleList'

function App(props) {
    return (
        <div>
            <h2>Menu</h2>
            <div>
                <h1>News App</h1>
                <ArticleList articles = {props.articles}/>
            </div>
        </div>
    )
}

App.propTypes = {
    articles: PropTypes.array
}

export default App