import React from 'react'
import ArticleList from './components/ArticleList'

export default function App(props) {
    return (
        <div style={{ width: '80%', margin: '0 auto' }}>
            <h2>Menu</h2>
            <div>
                <h1>News App</h1>
                <ArticleList articles = {props.articles}/>
            </div>
        </div>
    )
}