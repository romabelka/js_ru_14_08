import React, {Component} from 'react'
import Article from './Article'
import articleAc from "../decorators/articleAc";

class ArticleList extends Component {
    // state = {
    //     openArticleId: null
    // }

    render() {
        const {isOpen, openArticle} = this.props;
        console.log(isOpen)
        console.log(openArticle)
        const articleElements = this.props.articles.map(article => (
            <li key={article.id}>
                <Article
                    article={article}
                    isOpen={article.id === this.state.openArticleId}
                    toggleOpen={openArticle.bind(this, article.id)}
                />
            </li>
        ))

        return (
            <ul>
                {articleElements}
            </ul>
        )
    }

    // toggleOpenArticle(openArticleId) {
    //     this.setState({ openArticleId })
    // }

/*
    toggleOpenArticle = (openArticleId) => () => {
        this.setState({ openArticleId })
    }
*/
}

export default articleAc(ArticleList)