import React, {Component} from 'react'
import Comment from './Comment'
import Loader from './Loader'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {loadAllComments} from '../AC'

class CommentsList extends Component {
    static defaultProps = {
        //comments: PropTypes.array.isRequired,
    }
    componentWillReceiveProps({ loadAllComments, path, comments, loading }) {
        if(!loading && !comments.get(path)) loadAllComments(path)

    }
    componentDidMount() {
        const { loadAllComments, path, comments, loading  } = this.props
        if(!loading && !comments.get(path)) loadAllComments(path)
        
    }
    render() {

        return (
            <div>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        const { comments, loading, path } = this.props

        if(!comments.get(path)) return <Loader/>
        return (
            <ul>
                {comments.get(path).map(comment => <li key = {comment.get('id')}><Comment fromChunk={path} id = {comment.get('id')} /></li>)}
            </ul>
        )
    }
}


export default connect(state => {
    console.log('---', 'connect')
    return {
        comments: state.comments.commentsChunks,
        loading: state.comments.loading,
    }
}, { loadAllComments })(CommentsList)