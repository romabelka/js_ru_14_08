import React, { Component } from 'react'
import Comment from './Comment'
import Pagination from './Pagination'
import CommentForm from './CommentForm'
import Loader from './Loader'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { loadComments } from '../AC'

class CommentsPagination extends Component {
    static defaultProps = {
        loadComments: PropTypes.func.isRequired
    }

    loadPageComments = (props) => {
        const { needLoadComments, currentPage, loadComments } = props;
        if (needLoadComments)
            loadComments(currentPage);
    }

    componentDidMount(){
         this.loadPageComments(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.loadPageComments(nextProps);
    }

    render() {
        const { currentPage, loading, commentIds } = this.props;

        const commentList = commentIds.map((commenId) => {
            return <li key = {commenId}><Comment id = {commenId} /></li>
        });

        return <div>
            <div>Привет мир</div>
            {loading ? <Loader /> : null}
            {commentList ?  <ul>{commentList}</ul> : null }
            <Pagination currentPage={currentPage} totalRecords={16} pageSize={4} path={this.props.match.url} />
        </div>
    }
}


export default connect((state, props) => {
    const currentPage = props.match.params.pageNumber ? props.match.params.pageNumber : 1;
    const commentPage = state.comments.commentPages.get(currentPage);
    const loading = commentPage ? commentPage.loading : false;
    return {
        currentPage: currentPage,
        needLoadComments: commentPage ? !(commentPage.commentIds.length || loading) : true,
        loading,
        commentIds: commentPage ? commentPage.commentIds : []
    }
}, { loadComments })(CommentsPagination)