import React, {Component} from 'react'
import Article from './Article'
import PropTypes from 'prop-types'


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

    state = {
        openArticleId: null
    }

    render() {
        const articleElements = this.props.articles.map(article => (
            <li key={article.id}>
                <Article
                    article={article}
                    isOpen={article.id === this.state.openArticleId}
                    // люблю карри
                    toggleOpen={this.toggleOpenArticle(article.id)}
                />
            </li>
        ))

        return (
            <ul>
                {articleElements}
            </ul>
        )
    }

    //toggleOpenArticle(openArticleId) {
    //    this.setState({ openArticleId })
    //}

    toggleOpenArticle = (openArticleId) => () => {
        this.setState({ openArticleId })
    }

}

export default ArticleList