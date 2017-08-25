import React, {Component} from 'react'
import Article from './Article'
import PropTypes from 'prop-types'
import toggleIfOpen from '../decorators/toggleIfOpen'


class ArticleList extends Component {

    static propTypes = {
        articles: PropTypes.arrayOf(PropTypes.object)
        // ..или сложнее, ведь мы пользуем здесь свойства элементов массива
        //articles: PropTypes.arrayOf(
        //    PropTypes.shape(
        //        {
        //            id: PropTypes.string,
        //            title: PropTypes.string.isRequired,
        //            text: PropTypes.string
        //        }
        //    )
        //)
    };

    render() {
        let {articles, openCondition, toggleIfOpen} = this.props;

        const articleElements = articles.map(article => (
            <li key={article.id} data-id={article.id}>
                <Article
                    article={article}
                    isOpen={article.id === openCondition}
                    toggleOpen={toggleIfOpen(article.id)}
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

export default toggleIfOpen(ArticleList);