import React, { Component, PropTypes } from 'react'
import Select from 'react-select'
import { connect } from 'react-redux'
import { selectedArticles } from '../../AC'

import 'react-select/dist/react-select.css'

class SelectFilter extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    };

    handleSelectionChange = selected => {
        const {selectedArticles} = this.props
        const selectedIds = selected.map(selectedItem => selectedItem.value)

        selectedArticles(selectedIds)
    }

    render() {
        const { articles, selected } = this.props
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))

        return <Select
            options={options}
            value={selected}
            onChange={this.handleSelectionChange}
            multi
        />
    }
}

export default connect(state => ({
    selected: state.selectedArticles
}), { selectedArticles })(SelectFilter)