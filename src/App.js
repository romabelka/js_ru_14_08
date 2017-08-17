import React from 'react'
import Article from './Article'

export default function App(props) {
    return (
        <div>
            <h2>Menu</h2>
            <div>
                <h1>News App</h1>
                <Article article = {props.articles[0]}/>
            </div>
        </div>
    )
}