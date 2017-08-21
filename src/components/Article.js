import React, {Component} from 'react'
import CommentList from './CommentList'
import PropTypes from 'prop-types'

class Article extends Component {
    static propTypes = {
        article: PropTypes.shape({
            id: PropTypes.string,
            title: PropTypes.string.isRequired,
            text: PropTypes.string
        }).isRequired
    }

    constructor(props) {
        super(props)

        this.state = {
            isOpen: true
        }
    }

    render() {
        const {article} = this.props

        return (
            <div>
                <h3 onClick = {this.handleClick}>{article.title}!!!!!!</h3>
                {this.getBody()}
            </div>
        )
    }

    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    getBody() {
        return this.state.isOpen && (
            <div>
                <p>{this.props.article.text}</p>
                <CommentList comments = {this.props.article.comments}/>
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
