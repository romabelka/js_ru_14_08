import React from 'react'
import Article from './Article'
import accordion from '../decorators/accordion'
import PropTypes from 'prop-types'

function ArticleList(props) {
    const {openAccordionItemId, toggleOpenAccordion} = props;

    const articleElements = props.articles.map(article => (
        <li key={article.id}>
            <Article
                article={article}
                isOpen={article.id === openAccordionItemId}
                toggleOpen={toggleOpenAccordion(article.id)}
            />
        </li>
    ))

    return (
        <ul>
            {articleElements}
        </ul>
    )
}

ArticleList.defaultProps = {
    articles: []
}

ArticleList.propTypes = {
    articles: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.any.isRequired
    })),
    toggleOpenAccordion: PropTypes.func.isRequired
}

export default accordion(ArticleList)