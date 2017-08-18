import React, { Component } from 'react';
import Comment from './Comment'

class CommentList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        }
    }

    render() {
        const { comments } = this.props;
        const commentsLength = comments ? comments.length : 0;

        if (!comments || commentsLength == 0) return null;

        const { isOpen } = this.state;

        const link = <button onClick = {this.handleClick} style={ { padding: '10px 45px' } }>{ isOpen ? `Close ${commentsLength} comments` : `Open ${commentsLength} comments` }</button>;

        return (
            <div>
                { link }
                <br/>
                <br/>
                { isOpen ? this.getComments(comments) : '' }
            </div>
        )
    }

    handleClick = (e) => {
        e.preventDefault();
        this.setState({
            isOpen: !this.state.isOpen
        })
    };

    getComments(comments) {
        const commentsElements = comments.map(comment => <li key={comment.id}><Comment comment={ comment }/></li>)

        return (
            <ul>
                { commentsElements }
            </ul>
        )
    }
}

export default CommentList