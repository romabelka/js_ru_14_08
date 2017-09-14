import React, { Component } from 'react'
import CommentsList from '../CommentList'
import Comment from '../Comment'
import Article from '../Article'
import {Route} from 'react-router-dom'

class CommentsPage extends Component {
    static propTypes = {

    };

    render() {
        console.log('---', 'CommentPage Match', this.props.match)
        return (
            <div>
                <Route path={`${this.props.match.path}/:id`} children={this.getComment}/>
            </div>
        )
    }

    getComment = ({match}) => {
        const pageId = match ? match.params.id : 1
        return <CommentsList key={pageId} path={this.props.match.path} pageId={pageId}/>
    }
}

export default CommentsPage