import React, { Component, PropTypes } from 'react'
import Select from 'react-select'
import {connect} from 'react-redux'
import {setFilterTitle} from '../../AC'

import 'react-select/dist/react-select.css'

class SelectFilter extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    };

    handleSelectionChange = selected => {
        const articleIds = selected.map(item => item.value);
        this.props.setFilterTitle(articleIds);
    }

    render() {
        const { articles, filters } = this.props
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))

        return <Select
            options={options}
            value={filters.selected}
            onChange={this.handleSelectionChange}
            multi
        />
    }
}
const mapStateToProps = store => {
    return {
        articles: store.articles,
        filters: store.filters,
    }
}
export default connect(mapStateToProps, {setFilterTitle})(SelectFilter)