import React, {Component} from 'react'
import ArticleComments from './ArticleComments'

class Article extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: true,
            isShow: true
        }
    }

    render() {
        const {article} = this.props;
        const { isShow } = this.props;
        let textBtn = this.state.isShow ? 'Hide' : 'Show';

        return (
            <div>
                <h3 onClick = {this.handleClick}>{article.title}</h3>
                {this.getBody()}
                <button onClick = {this.handleComment}>{textBtn}</button>
                {this.getComments()}
            </div>
        )
    }

    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    handleComment = () => {
        this.setState({
            isShow: !this.state.isShow
        })
    }

    getComments(){
        return this.state.isShow ? <ArticleComments comments = {this.props.article.comments} /> : ''
    }

    getBody() {
        return this.state.isOpen && <p>{this.props.article.text}</p>
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
