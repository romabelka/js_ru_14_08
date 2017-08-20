import React, {Component} from 'react'
import Comment from './Comment'
import Button from './Button'

class CommentList extends Component {
    render() {
        const {article} = this.props;

        const commentElements = article.map (comment =>
            if (comments in article) {
                return (
                    <ul>
                        {commentElements}
                        <Button/>
                    </ul>
                )
            } else return [];
        )



        function ArticleList(props) {
            const articleElements = props.articles.map(
                if(comments in article){
                    this.props.comments.map(comment =>
                        <li key={comment.id}><Comment comment={comment} /></li>)
                }else {
                    <li key={article.id}><Article article={article}/></li>)
                }
            )

            return (
                <ul>
                    {articleElements}
                </ul>
            )
        }





        const commentElements = this.props.comments.map(comment =>
            <li key={comment.id}><Comment comment={comment} /></li>)






        if(comments in this.props) {
            return(
                <ul>
                    {commentElements}
                    <Button/>
                </ul>
            )
        } else {
            return this.props
        }




    }
}

export default CommentList