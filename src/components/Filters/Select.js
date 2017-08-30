import React, { Component, PropTypes } from 'react'
import Select from 'react-select'
import {connect} from 'react-redux'
import {selectArticles, setVisibilityFilter} from '../../AC'

import 'react-select/dist/react-select.css'

class SelectFilter extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    };

    handleSelectionChange = selected => {
        const {selectArticles, setVisibilityFilter} = this.props
        selectArticles(selected)
        setVisibilityFilter()
    }
    
    render() {
        const { articles } = this.props
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))

        return <Select
            options={options}
            value={this.props.selected}
            onChange={this.handleSelectionChange}
            multi
        />
    }
}

export default connect(state => {
    return {
        selected: state.selectedArticles
    }
}, { selectArticles, setVisibilityFilter })(SelectFilter)