import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DateRange from './DateRange'
import SelectFilter from './Select'
import {connect} from 'react-redux'

class Filters extends Component {
    static propTypes = {
    };

    render() {
        const {articles, selected, dateRange} = this.props;
        return (
            <div>
                <SelectFilter articles={articles} selected={selected}/>
                <DateRange dateRange={dateRange} />
            </div>
        )
    }
}

export default connect(state => ({
    articles : state.filtersArticles,
    selected : state.selectedArticles,
    dateRange: state.dateRange
}))(Filters)