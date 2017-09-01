import React, {Component} from 'react'
import DateRange from './DateRange'
import SelectFilter from './Select'
import {connect} from 'react-redux'
import {filter} from '../../AC'
import PropTypes from 'prop-types'

class Filters extends Component {
    static propTypes = {
        select: PropTypes.shape({
            articles: PropTypes.array.isRequired,
            selected: PropTypes.array,
        }),
        dateRange: PropTypes.shape({
            from: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
            to: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
        })
    };

    render() {
        const {select, dateRange} = this.props
        return (
            <div>
                <SelectFilter {...select} handleChange={this.handleSelectChange}/>
                <DateRange {...dateRange} handleChange={this.handleDateRangeChange}/>
            </div>
        )
    }

    handleSelectChange = selected => {
        const {filter, dateRange} = this.props
        filter({
            selected: selected.map(item => item.value),
            from: dateRange.from,
            to: dateRange.to
        })
    }

    handleDateRangeChange = dateRange => {
        const {select, filter} = this.props

        filter({
            selected: select.selected,
            from: dateRange.from,
            to: dateRange.to
        })
    }
}

export default connect(state => ({
    select: state.filter.select,
    dateRange: state.filter.dateRange
}), {filter})(Filters)