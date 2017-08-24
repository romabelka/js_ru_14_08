import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ArticleChart extends Component {
    static propTypes = {

    };

    render() {
        return <div ref='container'/>
    }

    componentDidMount() {
        //do some drawing with d3 in this.refs.container
//     this.refs.container
    }

/*
    setContainerRef = container => {
        this.container = container
        //do some drawing with d3 in container
    }
*/

    componentDidUpdate() {
        //update d3 chart in this.refs.container
    }
}

export default ArticleChart