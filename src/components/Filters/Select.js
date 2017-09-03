import React, { Component, PropTypes } from 'react'
import Select from 'react-select'
import {connect} from 'react-redux'
import {filterArticles} from '../../AC'

import 'react-select/dist/react-select.css'

class SelectFilter extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    };

    handleSelectionChange = selected => this.props.filterArticles({ selected })

    render() {
        const { articles, filterOption } = this.props
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))

        return <Select
            options={options}
            value={filterOption.selected}
            onChange={this.handleSelectionChange}
            multi
        />
    }
}


export default connect(state => ({
    articles: state.articles,
    filterOption: state.filters
}), { filterArticles })(SelectFilter)