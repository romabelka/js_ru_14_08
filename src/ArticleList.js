import React, {Component} from 'react';
import Article from './Article'

export default class ArticleList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul>
                {this.getElements()}
            </ul>
        );
    }
    
    getElements() {
        return this.props.articles.map(article => {
            return(
                <li key={article.id}>
                    <Article article={article}/>
                </li>
            );
        });
    }
}