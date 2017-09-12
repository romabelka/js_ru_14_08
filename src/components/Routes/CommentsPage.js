import React, { Component } from 'react'
import {connect} from 'react-redux'
import {loadCommentsQuantity} from '../../AC';
import Comment from '../Comment'
import {Route} from 'react-router-dom'
import {Link} from 'react-router-dom'

class CommennsPage extends Component {
    static propTypes = {

    };

    componentDidMount() {
        this.props.loadCommentsQuantity();
    }

    render() {
        console.log('---', 'CommennsPage Match', this.props.match)
        let {total, commentsOnPage} = this.props
        let {path} = this.props.match
        let pageCount = total ? Math.ceil(total/commentsOnPage) : null
        let paginator = []
        if (pageCount) {
            for (var i = 0; i < pageCount; i++) {
                paginator.push(<li key={i}><Link to={`${path}/${(i+1)}`}>{i+1}</Link></li>)
            }
        }
        return (
            <div>
                {paginator.length ? <ul>{paginator}</ul> : null}
                <Route path={`${path}/:id`} children={this.getComments}/>
            </div>
        )
    }

    getComments = ({match}) => {
        console.log('MATCH', match)
        if (!match) return null
        return <Comment text={'qwe'} user={'asd'} key={match.params.id} />
    }
}

export default connect(
    state => ({
        total: state.comments.total,
        commentsOnPage: state.comments.commentsOnPage,
        comments: state.comments.entities,
    }),
    {loadCommentsQuantity}
)(CommennsPage)
