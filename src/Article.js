import React, {Component} from 'react'
import CommentList from './CommentList'

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
        return typeof this.props.article.comments != 'undefined' && <CommentList comments={this.props.article.comments}/>
    }
}

export default Article
