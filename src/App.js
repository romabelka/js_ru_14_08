import React from 'react'
import ArticleList from './ArticleList'

export default function App(props) {
    return (
        <div>
            <div>
                <h1>News App</h1>
                <ArticleList articles = {props.articles}/>
            </div>
        </div>
    )
}