import React, { Component } from 'react'
import {connect} from 'react-redux'
import {loadCommentsQuantity, loadComments} from '../../AC';
import Comment from '../Comment'
import {Route} from 'react-router-dom'
import {Link} from 'react-router-dom'

// /api/comment?limit=5&offset=5

class CommennsPage extends Component {
    static propTypes = {

    };

    componentDidMount() {
        this.props.loadCommentsQuantity();
    }

    getPaginator = () => {
        let {total, limit} = this.props
        let pageCount = total ? Math.ceil(total/limit) : null
        let {path} = this.props.match
        let paginator = []

        if (pageCount) {
            for (var i = 0; i < pageCount; i++) {
                paginator.push(<li key={i}><Link to={`${path}/${(i+1)}`}>{i+1}</Link></li>)
            }
        }

        if (!paginator.length) {
            return null
        }

        return <ul>{paginator}</ul>;
    }

    render() {
        console.log('---', 'CommennsPage Match', this.props.match)
        let {total, limit, offset} = this.props
        let {path} = this.props.match

        return (
            <div>
                {this.getPaginator()}
                <Route path={`${path}/:id`} render={this.getComments}/>
            </div>
        )
    }

    getComments = ({match}) => {
        if (!match) return null
        let {loadComments, limit, offset, comments} = this.props
        let newOffset = +match.params.id*limit - limit
        let commentsArr = Object.values(comments.toJS())

        if (commentsArr.length === 0) {
            loadComments(limit, newOffset)
        }

        if (offset !== newOffset) {
            // loadComments(limit, newOffset)
        }

        let result = commentsArr.map(comment => <Comment comment={comment} key={comment.id} />)

        return <div>{result}</div>;
    }
}

export default connect(
    state => ({
        total: state.comments.total,
        limit: state.comments.limit,
        offset: state.comments.offset,
        comments: state.comments.entities,
    }),
    {loadCommentsQuantity, loadComments}
)(CommennsPage)
