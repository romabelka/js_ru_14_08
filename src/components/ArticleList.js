import React, {Component} from 'react'
import Article from './Article'
import accordion from '../decorators/accordion'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

class ArticleList extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired,
        //from accordion decorator
        openItemId: PropTypes.string,
        toggleOpenItem: PropTypes.func.isRequired
    }

    render() {
        const {
            openItemId,
            toggleOpenItem,
            articles,
            selected,
            dateRange
        } = this.props;

        const articleElements = articles
            /* по-умолчанию показываются все */
            .filter(article => {
                return selected.length === 0
                    || selected
                        .map(item => item.value)
                        .indexOf(article.id) > -1
            })
            /* по-умолчанию показываются от начала времен */
            .filter(article => {
                let {from, to} = dateRange;
                let articleDate = new Date(article.date);
                return articleDate >= new Date(from) && (to === null || articleDate <= new Date(to));
            })
            .map(article => (
                <li key={article.id}>
                    <Article
                        article={article}
                        isOpen={article.id === openItemId}
                        toggleOpen={toggleOpenItem(article.id)}
                    />
                </li>
            ));

        return (
            <ul>
                {articleElements}
            </ul>
        )
    }
}

export default connect(state => ({
    articles: state.articles,
    defaultOpenId: state.articles[0].id,
    dateRange: state.dateRange,
    selected: state.articleSelect,
}))(accordion(ArticleList))