import React, {Component} from 'react'

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
            <div>
                <h3 onClick = {this.handleClick}>{article.title}</h3>
                {this.getBody()}
            </div>
        )
    }

    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    };

    getBody() {
        return this.state.isOpen && <p>{this.props.article.text}</p>
    }
}

export default Article
