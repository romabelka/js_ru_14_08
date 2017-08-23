import React, {Component} from 'react';
import Article from './Article';
import accordion from '../decorators/accordion';
import propTypes from 'prop-types';

class ArticleList extends Component {
    static propTypes = {
        articles: propTypes.array
    }
    render() {
        const articleElements = this.props.articles.map(article => (
            <li key={article.id}>
                <Article
                    article={article}
                    isOpen={article.id === this.props.openId}
                    toggleOpen={this.props.toggleOpenId(article.id)}
                />
            </li>
        ))

        return (
            <ul>
                {articleElements}
            </ul>
        )
    }

    // toggleOpenArticle(id) {
    //     this.setState({ openArticleId: id }) //Был не очень понятный момент
    // }
}

export default accordion(ArticleList);