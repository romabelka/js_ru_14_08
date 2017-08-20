import React, {Component} from 'react';
import CommentsList from './CommentsList';

export default class Article extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: true,
            showComments: false,
        }
    }

    render() {
        const {article} = this.props;

        return (
            <div>
                <h3 onClick = {this.handleArticleClick}>{article.title}</h3>
                {this.getBody()}
                <button onClick={this.handleButtonClick} >
                    {this.state.showComments ? "Hide comments" : "Show comments"}
                </button>
                {this.getComments()}
            </div>
        );
    }

    handleArticleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    
    handleButtonClick = () => {
        this.setState({
            showComments: !this.state.showComments
        });
    }

    getBody() {
        return this.state.isOpen && <p>{this.props.article.text}</p>
    }

    getComments() {
        return this.state.showComments && <CommentsList comments={this.props.article.comments} />
    }
}

/*
export default function Article(props) {
    const {article} = props
    return (
        <div>
            <h3>{article.title}</h3>
            <p>{article.text}</p>
        </div>
    )
}*/
