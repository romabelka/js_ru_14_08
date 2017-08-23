import React from 'react'
import ArticleList from './components/ArticleList'
import propTypes from 'prop-types'

export default function App(props) {
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

App.prototype = {
    articles: propTypes.array
}