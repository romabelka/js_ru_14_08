import React, {Component} from 'react';

class Comment extends Component {
    constructor(props){
        super(props);
    }
    render() {
        let {comment} = this.props;
        return(
            <div>
                <div>{comment.user}</div>
                <p>{comment.text}</p>
            </div>
        );
    }
}

export default Comment;