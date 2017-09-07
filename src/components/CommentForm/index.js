import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.css'
import {connect} from 'react-redux'
import {changeNewComment, addComment} from '../../AC'

class CommentForm extends Component {
    static propTypes = {
    };

    render() {
        const {user, text} = this.props

        return (
            <form onSubmit = {this.handleSubmit}>
                user: <input value = {user}
                             onChange = {this.handleChange('user')}
                             className = {this.getClassName('user')} />
                comment: <input value = {text}
                                onChange = {this.handleChange('text')}
                                className = {this.getClassName('text')} />
                <input type = "submit" value = "submit"/>
            </form>
        )
    }

    handleSubmit = ev => {
        ev.preventDefault()

        /*
        if (!this.validate('user') || !this.validate('text')) {
            return false
        }
        */

        const {changeNewComment, addComment, articleId, user, text} = this.props

        addComment(articleId, {user, text})
        changeNewComment(articleId, {user: '', text: ''})
    }

    getClassName = type => !this.validate(type) ? 'form-input__error' : ''

    handleChange = type => ev => {
        const {value} = ev.target
        if (value.length > limits[type].max) return

        const {changeNewComment, articleId, user, text} = this.props
        changeNewComment(articleId, {user, text, [type]: value})
    }

    validate = type => this.props[type].length && this.props[type].length >= limits[type].min
}

const limits = {
    user: {
        min: 10,
        max: 20
    },
    text: {
        min: 30,
        max: 100
    }
}

export default connect((state, ownProps) => ({
    user: (state.newComments[ownProps.articleId] == null) ? '' : state.newComments[ownProps.articleId].user,
    text: (state.newComments[ownProps.articleId] == null) ? '' : state.newComments[ownProps.articleId].text
}), { changeNewComment, addComment })(CommentForm)