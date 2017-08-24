import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ArticleChart extends Component {
    static propTypes = {

    };

    render() {
        return <div ref={this.setContainerRef}/>
    }

    setContainerRef = container => {
        this.container = container
        //do some drawing with d3 in container
    }

    componentDidUpdate() {
        //update d3 chart in this.container
    }
}

export default ArticleChart