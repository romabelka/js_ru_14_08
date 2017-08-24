import React from 'react'
import ArticleList from './components/ArticleList'
import PropTypes from 'prop-types'

export default function App(props) {
    App.propTypes = {
        props: PropTypes.arrayOf(
            PropTypes.shape(
                {
                    id: PropTypes.string.isRequired,
                    date: PropTypes.string.isRequired,
                    text: PropTypes.string.isRequired,
                    title: PropTypes.string,
                    comments: PropTypes.arrayOf(PropTypes.string)
                }
            )
        )
        // ..или попроще:
        // props: PropTypes.arrayOf(PropTypes.object)
    };

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