import React, { Component } from 'react'

export default class Comment extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const { user, text } = this.props.data;

        return (
            <div className="comment">
                <hr/>
                <h4>{user}</h4>
                <p>{text}</p>
            </div>
        )
    }

}
