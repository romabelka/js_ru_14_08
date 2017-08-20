import React, {Component} from 'react'
import CommentList from './CommentList';

class Article extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showComment: false,
            isOpen: true
        }
    }

    render() {
        const {article} = this.props

        return (
            <div>
                <h3 onClick = {this.handleClick}>{article.title}</h3>
                {this.getBody()}
                {this.getComment()}
                <button onClick= {this.showComment}>{this.state.showComment ? 'Скрыть' : 'Показать'}</button>
            </div>
        )
    }

    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    showComment = () => {
        this.setState({
            showComment: !this.state.showComment
        })
    }

    getComment() {
        return this.state.showComment && <CommentList comments = {this.props.article.comments}/>
    }

    getBody() {
        return this.state.isOpen && <p>{this.props.article.text}</p>
    }
}

export default Article


