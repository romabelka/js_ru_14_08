import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {addComment} from '../../AC/';
import './style.css'

class CommentForm extends Component {
    static propTypes = {
    };

    state = {
        user: '',
        text: ''
    }

    render() {
        console.log(this.props.submit);
        return (
            <form onSubmit = {this.handleSubmit}>
                user: <input value = {this.state.user}
                             onChange = {this.handleChange('user')}
                             className = {this.getClassName('user')} />
                comment: <input value = {this.state.text}
                                onChange = {this.handleChange('text')}
                                className = {this.getClassName('text')} />
                <input type="submit" value="submit"/>
            </form>
        )
    }

    handleSubmit = ev => {
        ev.preventDefault()
        this.props.submit(this.state.user, this.state.text)
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
        min: 5,
        max: 20
    },
    text: {
        min: 5,
        max: 100
    }
}

export default connect(
    null,
    dispatch => ({
        submit: (user, text) => dispatch(addComment(user, text))
    })
)(CommentForm)
