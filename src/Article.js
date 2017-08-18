import React, {Component} from 'react'
import Comments from './Comments'

class Article extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: true
        }
    }

    render() {
        const {article} = this.props;

        return (
            <div className="article">
                <h3 onClick = {this.handleClick}>{article.title}</h3>
                {this.getBody()}
                {this.getComments()}
            </div>
        )
    }

    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    };

    getComments() {
        return this.props.article.comments && <Comments comments={this.props.article.comments} />
    }

    getBody() {
        return this.state.isOpen && <p>{this.props.article.text}</p>
    }
}

export default Article