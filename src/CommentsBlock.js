import React from 'react';

class CommentsBlock extends React.Component{

    constructor(props) {
        super(props);

        this.commentsData = props.data;
        this.state = {
            isBlockShown: false
        }
    }

    toggleCommentsView = () => {
        this.setState({
            isCommentsOpen: !this.state.isCommentsOpen
        })
    };

    get CommentItemList(){
        return this.commentsData && this.commentsData.map(comment => CommentsBlock.createCommentItem(comment));
    }

    static createCommentItem(comment) {
        let id = comment.id;
        return (
            <li key={id}>
                <div id={"user-" + id}><b>{comment.user}</b></div>
                <p>{comment.text}</p>
            </li>
        )
    }

    render () {

        return (
            <div>
                <p>
                    <a href="javascript:void(0)" onClick={this.toggleCommentsView}>
                        {this.state.isCommentsOpen
                            ? 'Скрыть'
                            : 'Показать'
                        } комментарии
                    </a>
                </p>
                {
                    this.state.isCommentsOpen &&
                        <ul>
                            {this.CommentItemList}
                        </ul>
                }
            </div>
        )
    }
}



export default CommentsBlock;