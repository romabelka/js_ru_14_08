import React, { Component } from 'react'
import ArticleList from '../ArticleList'
import Article from '../Article'
import {Route} from 'react-router-dom'
import PropTypes from 'prop-types'

class ArticlesPage extends Component {
    static propTypes = {

    };

    static contextTypes = {
        localize: PropTypes.func
    }
    render() {
        console.log('---', 2)
        return (
            <div>
                <ArticleList path={this.props.match.path} />
                <Route path={`${this.props.match.path}/:id`} children={this.getArticle}/>
            </div>
        )
    }

    getArticle = ({match}) => {
        console.log('MATCH', match)
        if (!match) return <h2>{this.context.localize('selectArticleMessage')}</h2>
        return <Article id={match.params.id} isOpen key={match.params.id} />
    }
}

export default ArticlesPage