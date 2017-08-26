import React, {Component} from 'react'
import Comment from './../Comment'
import toggleOpen from '../../decorators/toggleOpen'
import PropTypes from 'prop-types'
import './style.css';

class CommentList extends Component {
    static defaultProps = {
        comments: [],
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    }

    state = {
        name: '',
        text: '',
    }

    handleChangeName = event => {
        this.setState({name: event.target.value.length < 20 ? event.target.value : this.state.name})
    }

    handleChangeText = event => {
        this.setState({text: event.target.value.length < 100 ? event.target.value : this.state.text})
    }

    submit = event => {
        event.preventDefault();
        let {name, text} = this.state;

        if (name.length >= 10 && text.length >= 30) {
            this.setState({
                name: '',
                text: ''
            })
        }
    }

    render() {
        const {isOpen, toggleOpen} = this.props
        const text = isOpen ? 'hide comments' : 'show comments'

        return (
            <div>
                <button onClick={toggleOpen}>{text}</button>
                {this.getBody()}
            </div>
        )
    }
 
    getBody() {
        const { comments, isOpen } = this.props
        if (!isOpen) return null
        let {name, text} = this.state
        return (
            <div>
                {comments.length ? (
                    <ul>
                        {comments.map(comment => <li key = {comment.id}><Comment comment = {comment} /></li>)}
                    </ul>
                    ) : <h3>No comments yet</h3>}
                <form onSubmit={this.submit}>
                    <input type="text" name="name" className={name.length < 10 ? 'error' : ''} value={name} onChange={this.handleChangeName} />
                    <input type="text" name="text" className={text.length < 30 ? 'error' : ''} value={text} onChange={this.handleChangeText} />
                    <button type="submit">submit</button>
                </form>
            </div>
        )
    }
}


export default toggleOpen(CommentList)
