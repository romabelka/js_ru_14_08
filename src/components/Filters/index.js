import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DateRange from './DateRange'
import SelectFilter from './Select'

class Filters extends Component {
    static propTypes = {
    };

    render() {
        const {articles} = this.props
        return (
            <div>
                <SelectFilter articles={articles}/>
                <DateRange />
            </div>
        )
    }
}

export default Filters