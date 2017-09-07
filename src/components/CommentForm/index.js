import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {addComment} from '../../AC'
import './style.css'

class CommentForm extends Component {
    static propTypes = {
    };

    state = {
        user: '',
        text: ''
    }

    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
                user: <input value = {this.state.user} name="user"
                             onChange = {this.handleChange('user')}
                             className = {this.getClassName('user')} />
                comment: <input value = {this.state.text} name="comment"
                                onChange = {this.handleChange('text')}
                                className = {this.getClassName('text')} />
                <input type = "submit" value = "submit"/>
            </form>
        )
    }

    handleSubmit = ev => {
        ev.preventDefault()
        this.setState({
             user: '',
             text: ''
        })
        
        const { addComment } = this.props

        addComment(ev.target.user.value, ev.target.comment.value, this.props.articleId);
    }

    getClassName = type => this.state[type].length && this.state[type].length < limits[type].min
        ? 'form-input__error' : ''

    handleChange = type => ev => {
        const {value} = ev.target
        if (value.length > limits[type].max) return
        this.setState({
            [type]: value
        })
    }
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

export default connect(null, {addComment})(CommentForm)