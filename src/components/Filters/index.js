import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DateRange from './DateRange'
import SelectFilter from './Select'
import {connect} from 'react-redux'

class Filters extends Component {
    static propTypes = {
    };

    render() {
        const {articles, selected} = this.props;
        return (
            <div>
                <SelectFilter articles={articles} selected={selected}/>
                <DateRange />
            </div>
        )
    }
}

export default connect(state => ({
    articles : state.articles,
    selected : state.selectedArticles
}))(Filters)