import React from 'react'

export default Component => class NewComment extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            comment: '',
            usernameValid: true,
            commentValid: true
        }
    }

    render() {
        return <Component
            {...this.props}
            handleCommentFormChange={this.handleChange}
            resetCommentForm={this.resetForm}
            username={this.state.username}
            newComment={this.state.comment}
            usernameValid={this.state.usernameValid}
            newCommentValid={this.state.commentValid}/>
    }

    handleChange = event => {
        const allowedInputs = {
                username(length) {
                    return length <= 20
                },
                comment(length) {
                    return length <= 100
                },
                usernameValid(length) {
                    return length >= 10
                },
                commentValid(length) {
                    return length >= 30
                }
            }
            let length = event.target.value.length,
                name = event.target.name
            if (!allowedInputs[name](length)) 
                return false;
            let valid = allowedInputs[name + 'Valid'](length)
            this.setState({
                [name]: event.target.value,
                [name + 'Valid']: valid
            })
        }

        resetForm = event => {
            this.setState({username: '', comment: '', usernameValid: true, commentValid: true})
        }
    }