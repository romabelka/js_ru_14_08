import React, {Component} from 'react'
import ArticleComment from './ArticleComment'

class ArticleCommentsList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            showComments: false
        }

        this.output = 'No comments';

    }


    render() {

        console.log("ArticleList render")

        return (
            <div>

                <button onClick = {this.handleCommentsBtnClick}>
                    {this.state.showComments ? 'Hide' : 'Show'} comments
                </button>

                <br/>
                <br/>

                <ol>
                    {this.getOutput()}
                </ol>
            </div>
        )

    }

    handleCommentsBtnClick = () => {
        this.setState({
            showComments: !this.state.showComments
        })
    }

    getOutput = () => {
        if ( typeof this.props.comments != 'undefined' && Object.prototype.toString.call(this.props.comments) === '[object Array]' && this.props.comments.length ) {
            this.output = this.props.comments.map(articleComment => <li key={articleComment.id}><ArticleComment articleComment={articleComment}/></li>)
        }

        if( this.state.showComments ) {
            return this.output
        }

    }

}

export default ArticleCommentsList