import React, { Component } from 'react'
import Comment from './Comment'

export default class Comments extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
        this.toggleComments = this.toggleComments.bind(this);
    }

    getComments() {
        return this.state.isOpen && this.props.comments.map(comment => <Comment key={comment.id} data={comment} />)
    }

    toggleComments() {
        this.setState({
           isOpen: !this.state.isOpen
        });
    }

    render() {

        const text = this.state.isOpen ? 'Hide' : 'Show';

        return (
            <div>
                {this.getComments()}
                <button onClick={this.toggleComments}>{text} comments</button>
            </div>
        )
    }
}
