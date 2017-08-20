import React, {Component} from 'react'
import CommentList from "./CommentList";

class Article extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: true
        }
    }

    render() {
        const {article} = this.props

        return (
            <div>
                <h3 onClick = {this.handleClick}>{article.title}</h3>
                {this.getBody()}
            </div>
        )
    }

    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    getBody() {
        if (!this.state.isOpen) {
            return null
        }

        const article = this.props.article;
        const comments = article.comments && !!article.comments.length && <CommentList comments={article.comments} />

        return (
            <div>
                <p>{article.text}</p>
                {comments}
            </div>
        )
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
