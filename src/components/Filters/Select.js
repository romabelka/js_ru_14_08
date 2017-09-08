import React, { Component, PropTypes } from 'react'
import Select from 'react-select'
import {connect} from 'react-redux'
import 'react-select/dist/react-select.css'
import {selectedArticle} from '../../AC'

class SelectFilter extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    };

    handleSelectionChange = selected => {      
      const {selectedArticle} = this.props
      selectedArticle(selected.map(option => option.value))
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

export default connect(state=>({
  articles: state.articles,
  selected: state.filters.selected,
}), {selectedArticle})(SelectFilter)