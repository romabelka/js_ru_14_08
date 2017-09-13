import React, { Component } from 'react'
import CommentsList from '../CommentList'
import Article from '../Article'
import {Route} from 'react-router-dom'

class CommentsPage extends Component {
    static propTypes = {

    };

    render() {
        console.log('---', 'CommentPage Match', this.props.match)
        return (
            <div>
                <CommentsList path={this.props.match.path} />
                <Route path={`${this.props.match.path}/:id`} children={this.getComment}/>
            </div>
        )
    }

    getComment = ({match}) => {
        console.log('MATCH', match)
        if (!match) return <h2>Please select comment</h2>
        return <Comment id={match.params.id} isOpen key={match.params.id} />
    }
}

export default CommentsPage