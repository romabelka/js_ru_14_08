import React, { Component, PropTypes } from 'react'
import ArticleList from '../ArticleList'
import Article from '../Article'
import {Route} from 'react-router-dom'

class ArticlesPage extends Component {
    static propTypes = {

    };

    static contextTypes = {
        language: PropTypes.string,
        dictionary: PropTypes.object
    }

    render() {
        //console.log('---', 2)
        return (
            <div>
                <ArticleList path={this.props.match.path} />
                <Route path={`${this.props.match.path}/:id`} children={this.getArticle}/>
            </div>
        )
    }

    getArticle = ({match}) => {
        const { language, dictionary } = this.context;
        //console.log('MATCH', match)
        if (!match) return <h2>{ dictionary.please_select_article[language] }</h2>
        return <Article id={match.params.id} isOpen key={match.params.id} />
    }
}

export default ArticlesPage