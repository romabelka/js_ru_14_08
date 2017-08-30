import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DateRange from './DateRange'
import SelectFilter from './Select'
import {connect} from 'react-redux'
import {articles as defaultArticles} from '../../fixtures'

class Filters extends Component {
    static propTypes = {
    };

    render() {

        return (
            <div>
                <SelectFilter articles={defaultArticles}/>
                <DateRange />
            </div>
        )
    }
}

export default Filters