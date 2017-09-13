import React, { Component } from 'react'
import CommentsList from '../CommentsList'
import {Route, Link} from 'react-router-dom'

class CommentsPage extends Component {
    static propTypes = {

    };

    render() {
        console.log('---', 'CommentsPage Match', this.props.match)
        return (
            <div>
                <CommentsList path={this.props.match.params.page} />
                <div><Link to="/comments/1">1</Link></div>
                    <div><Link to="/comments/2">2</Link></div>
                    <div><Link to="/comments/3">3</Link></div>
                    <div><Link to="/comments/4">4</Link></div>
            </div>
        )
    }
}

export default CommentsPage