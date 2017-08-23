import React, {Component} from 'react'
import CommentList from './CommentList'
import toggleOpen from '../decorators/toggleOpen'

class Article extends Component {
    
    render() {
        const {article, isOpen} = this.props
        return (
            <div>
                <h3 onClick = {this.props.handleClick}>{article.title}</h3>
                  {this.getBody()}
                  <CommentList comments = {article.comments}/>
            </div>
        )
    }



    getBody() {
        const {article, isOpen} = this.props
        return isOpen && <p>{this.props.article.text}</p>
    }


}

export default toggleOpen(Article);

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
