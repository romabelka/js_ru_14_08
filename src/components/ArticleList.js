import React, {Component} from 'react'
import PropTypes from 'prop-types';
import Article from './Article'
import accordion from '../decorators/accordion'
<<<<<<< HEAD

class ArticleList extends Component {
    static propTypes = {
        articles: PropTypes.arrayOf(PropTypes.object)
    }

    render() {
        const {toggleOpen, openElementId} = this.props
        const articleElements = this.props.articles.map(article => (
            <li key={article.id}>
                <Article
                    article={article}
                    isOpen={article.id === openElementId}
                    toggleOpen={toggleOpen(article.id)}
=======
import PropTypes from 'prop-types'

class ArticleList extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired,
        //from accordion decorator
        openItemId: PropTypes.string,
        toggleOpenItem: PropTypes.func.isRequired
    }

    render() {
        const {openItemId, toggleOpenItem, articles} = this.props
        const articleElements = articles.map(article => (
            <li key={article.id}>
                <Article
                    article={article}
                    isOpen={article.id === openItemId}
                    toggleOpen={toggleOpenItem(article.id)}
>>>>>>> upstream/master
                />
            </li>
        ))

        return (
            <ul>
                {articleElements}
            </ul>
        )
    }
}

export default accordion(ArticleList)