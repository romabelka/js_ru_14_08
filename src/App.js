import React from 'react'
import ArticleList from './components/ArticleList'
import ArticleChart from './components/ArticleChart'

export default function App(props) {
    return (
        <div>
            <h2>Menu</h2>
            <div>
                <h1>News App</h1>
                <ArticleList articles = {props.articles}/>
                <ArticleChart articles = {props.articles} />
            </div>
        </div>
    )
}