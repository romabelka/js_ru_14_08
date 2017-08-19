import React, {Component} from 'react'
import ArticleCommentsList from './ArticleCommentsList'

class Article extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: true,
            showComments: false
        }

        this.commentsWrapStyle = {
            display: this.state.showComments ? 'block' : 'none'
        }
    }

    render() {
        const {article} = this.props

        return (
            <div>
                <h3 onClick = {this.handleClick}>{article.title}</h3>
                {this.getBody()}
                <button onClick = {this.handleCommentsBtnClick}>
                    {this.state.showComments ? 'Hide' : 'Show'} comments
                </button>
                {this.getComments()}
            </div>
        )
    }

    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    handleCommentsBtnClick = () => {
        this.setState({
            showComments: !this.state.showComments
        })
    }

    getBody() {
        return this.state.isOpen && <p>{this.props.article.text}</p>
    }

    getComments() {
        return this.state.showComments && <ArticleCommentsList comments = {this.props.article.comments} />
    }


}

export default Article

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
