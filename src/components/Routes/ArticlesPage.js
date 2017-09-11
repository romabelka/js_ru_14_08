import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ArticleList from '../ArticleList'
import ArticlePage from './ArticlePage'
import {Route} from 'react-router-dom'

class ArticlesPage extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                <ArticleList />
                <Route path="/articles/:id" component={ArticlePage}/>
            </div>
        )
    }
}

export default ArticlesPage