import React, {Component} from 'react'

class Article extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: true,
            isShown: true
        }
    }

    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    toggleComments = () => {
        this.setState({
            isShown: !this.state.isShown
        })
    }

    getComments(article) {
        return this.state.isShown && article.comments.map(item => <p key={item.id}><b>{`${item.user}: `}</b>{item.text}</p>);
    }

    getBody() {
        return this.state.isOpen && <p>{this.props.article.text}</p>
    }

    render() {
        const {article} = this.props
        let buttonText = this.state.isShown ? 'Hide' : 'Show'

        let button = null;
        let comments = null;

        if (article.comments) {
            button = <button onClick={this.toggleComments}>{buttonText}</button>
            comments = this.getComments(article);
        }

        return (
            <div>
                <h3 onClick = {this.handleClick}>{article.title}</h3>
                {this.getBody()}
                {button}
                {comments}
            </div>
        )
    }
}

export default Article

/*
export default function Article(props) {
    const {article} = props
    return (
        <div>
            <h3>{article.title}</h3>
            <p>{article.text}</p>
        </div>
    )
}*/
