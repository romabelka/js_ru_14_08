import React, { Component } from 'react'
import Comment from './Comment'

class CommentsList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpenCommentsBlock: true
        }
    }
    
    render() {
        //if we had no comments nothing to render
        if (this.props.comments === undefined) 
            return (null);
        else {
            this.commentElements = this.props.comments.map(
                comment => <li key={comment.id}><Comment comment={comment}/></li>
            );

            return (
                <ul>
                    <button onClick={this.toggleComments}>{this.getButtonName()}</button>
                    {this.getBody()}
                </ul>
            )
        }
    }

    toggleComments = () => {
        this.setState({
            isOpenCommentsBlock: !this.state.isOpenCommentsBlock
        });
    }

    getBody() {
        return this.state.isOpenCommentsBlock && this.commentElements;
    }

    getButtonName() {
        return this.state.isOpenCommentsBlock ? 'Hide':'Show';
    }
}

// CommentsList.prototype.ToggleComments = function() {
//     this.state.isOpenCommentsBlock = !this.state.isOpenCommentsBlock;
// }

export default CommentsList