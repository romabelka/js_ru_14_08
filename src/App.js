import React, {Component} from 'react'
import ArticleList from './ArticleList'

export default class App extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
                <h2>Menu</h2>
                <div>
                    <h1>News App</h1>
                    <ArticleList articles={this.props.articles}/>
                </div>
            </div>
        );
    }
}