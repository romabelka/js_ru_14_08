import React, { Component } from 'react'
import PropTypes from 'prop-types'


class UserForm extends Component {
    static propTypes = {

    };

    state = {
        username: '',
        comment: ''
    }



    render() {

        let divStyle = {
            border: '1px solid #ccc'
        };

        return (
            <div>
                <br />
                <label>Username: </label>
                <input type="text" style={divStyle} value={this.state.username} onChange={this.handleChange('username')}/>
                <br />
                <br />
                <label>Comment: </label>
                <input type="text" style={divStyle} value={this.state.comment} onChange={this.handleChange('comment')} className=''/>
                <button type='submit' onClick={this.clearState}>Очистить</button>
            </div>
        )
    }


    handleChange = type => ev => {
        const { value } = ev.target
        if (type === 'username'){
            if( ev.target.value.length <= 10) {
                this.divStyle = {
                    border: '1px solid red'
                }
            }
        }

        if (type === 'comment') {
            if (ev.target.value.length <= 30) {
                this.divStyle = {
                    border: '1px solid red'
                }
            }
        }

        if(::this.lengthValidation(ev, type))

            this.setState({
                [ type ]: value
            })

    }

    lengthValidation = (ev, type) => {
        if (type === 'username'){
            return ev.target.value.length <= 20
        }

        if (type === 'comment'){
            return ev.target.value.length <= 100
        }
    }

    clearState = () => {
        this.setState({
            username: '',
            comment: ''
        })
    }
}

export default UserForm