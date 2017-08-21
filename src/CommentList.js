import React, {Component} from 'react';
import Comment from './Comment';

class CommentList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showComment: false,
        }
    }
    render() {
        return (
            <div>
                <ul>
                    {this.getComment()}
                    <button onClick= {this.showComment}>{this.state.showComment ? 'Скрыть' : 'Показать'}</button>
                </ul>
            </div>
        );
    }

    showComment = () => {
        this.setState({
            showComment: !this.state.showComment
        })
    }

    getComment() {
        const commentElements = this.props.comments ? this.props.comments.map(comment => <li key={comment.id}><Comment comment={comment}/></li>) : <li><p>Комментариев нет</p></li>;
        return this.state.showComment && commentElements;
    }
}

export default CommentList