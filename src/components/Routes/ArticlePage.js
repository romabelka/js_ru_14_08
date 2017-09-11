import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Article from '../Article'

class ArticlePage extends Component {
    static propTypes = {

    };

    render() {
        return <Article id={this.props.match.params.id} isOpen />
    }
}

export default ArticlePage