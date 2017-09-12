import React, {Component} from 'react'
import Article from './Article'
import Loader from './Loader'
import accordion from '../decorators/accordion'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {filtratedArticlesSelector} from '../selectors'
import {loadAllArticles} from '../AC'
import {Link} from 'react-router-dom'

class ArticleList extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired,
        //from accordion decorator
        openItemId: PropTypes.string,
        toggleOpenItem: PropTypes.func.isRequired
    }

    componentDidMount() {
        const {loaded, loading, loadAllArticles} = this.props
        if (!loading && !loaded) loadAllArticles()
    }

    render() {
        console.log('---', 'rendering article list')
        const {openItemId, toggleOpenItem, articles, loading, path} = this.props

        if (loading) return <Loader/>

        const articleElements = articles.map(article => (
            <li key={article.id}>
                <Link to={`${path}/${article.id}`}>{article.title}</Link>
            </li>
        ))

        return (
            <ul>
                {articleElements}
            </ul>
        )
    }
}

export default connect(state => {
    console.log('---', 'connect')
    return {
        articles: filtratedArticlesSelector(state),
        loading: state.articles.loading,
        loaded: state.articles.loaded,
    }
}, {loadAllArticles})(accordion(ArticleList))