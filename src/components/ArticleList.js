import React, {Component} from 'react'
import Article from './Article'
<<<<<<< HEAD
import accordion from '../decorators/accordion'
import PropTypes from 'prop-types'
=======
import Loader from './Loader'
import accordion from '../decorators/accordion'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {filtratedArticlesSelector} from '../selectors'
import {loadAllArticles} from '../AC'
import {NavLink, withRouter} from 'react-router-dom'
>>>>>>> romabelka/master

class ArticleList extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired,
        //from accordion decorator
        openItemId: PropTypes.string,
        toggleOpenItem: PropTypes.func.isRequired
    }

<<<<<<< HEAD
    render() {
        const {openItemId, toggleOpenItem, articles} = this.props
        const articleElements = articles.map(article => (
            <li key={article.id}>
                <Article
                    article={article}
                    isOpen={article.id === openItemId}
                    toggleOpen={toggleOpenItem(article.id)}
                />
=======
    componentDidMount() {
        const {loaded, loading, loadAllArticles} = this.props
        if (!loading && !loaded) loadAllArticles()
    }

    render() {
        console.log('---', 'rendering article list')
        const {openItemId, toggleOpenItem, articles, loading, path} = this.props

        if (loading) return <Loader/>

        const articleElements = articles.map(article => (
            <li key={article.id} onClick = {this.handleClick(article.id)}>
                {article.title}
{/*
                <NavLink to={`${path}/${article.id}`} activeStyle = {{color: 'red'}}>{article.title}</NavLink>
*/}
>>>>>>> romabelka/master
            </li>
        ))

        return (
            <ul>
                {articleElements}
            </ul>
        )
    }
<<<<<<< HEAD
}

export default accordion(ArticleList)
=======

    handleClick = (id) => () => {
        console.log('---', this.props.history.push(`/articles/${id}`))
    }
}

export default withRouter(connect(state => {
    console.log('---', 'connect')
    return {
        articles: filtratedArticlesSelector(state),
        loading: state.articles.loading,
        loaded: state.articles.loaded,
    }
}, {loadAllArticles})(accordion(ArticleList)))
>>>>>>> romabelka/master
