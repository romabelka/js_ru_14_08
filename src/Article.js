import React, {Component} from 'react'
import ArticleCommentsList from './ArticleCommentsList'

class Article extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: true
        }

    }

    render() {
        const {article} = this.props
        console.log("Article render")
        return (
            <div>
                <h3 onClick = {this.handleClick}>{article.title}</h3>
                {this.getBody()}
                {this.getComments()}
            </div>
        )
    }

    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    getBody() {
        return this.state.isOpen && <p>{this.props.article.text}</p>
    }

    getComments() {
        return <ArticleCommentsList comments = {this.props.article.comments} />
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
