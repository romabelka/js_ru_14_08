import React, {Component} from 'react'
import CommentList from './CommentList'

class Article extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: false
        }
    }

    render() {
        const {article} = this.props

        return (
            <div>
                <h3 style={{ cursor: 'pointer' }} onClick = {this.handleClick}>{article.title}</h3>
                {this.getBody(article.comments)}
            </div>
        )
    }

    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    getBody(comments) {
        return this.state.isOpen && <div><p>{this.props.article.text}</p><CommentList comments={comments}/></div>
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
