import React, {Component} from 'react';

export default class Comment extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {comment} = this.props;
        
        return (
            <article>
                <p>
                    {comment.user}
                    <br />
                    {comment.text}
                </p>
            </article>
        );
    }
}