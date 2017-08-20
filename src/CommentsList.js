import React, {Component} from 'react';
import Comment from './Comment';

export default class CommentsList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h3>Comments</h3>
                <ul>
                    {this.getComments()}
                </ul>
            </div>
        );
    }
    
    getComments() {
        let comments;
        if(this.props.comments) {
            comments = this.props.comments.map(comment => {
                return(
                    <li key={comment.id}>
                        <Comment comment={comment} />
                    </li>
                )
            });
        } else {
            comments = <li>No comments yet.</li>;
        }
        return comments;
    }
}