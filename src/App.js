import React from 'react'
import ArticleList from './components/ArticleList'
import ArticleChart from './components/ArticleChart'
import UserForm from './components/UserForm'

export default function App(props) {
    return (
        <div>
            <h2>Menu</h2>
            <div>
                <h1>News App</h1>
                <UserForm />
                <ArticleList articles = {props.articles}/>
                <ArticleChart articles = {props.articles} />
            </div>
        </div>
    )
}