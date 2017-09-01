import React, {Component, PropTypes} from 'react'
import Select from 'react-select'

import 'react-select/dist/react-select.css'
import {filterSelectArticle} from "../../AC/index";

class SelectFilter extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired,
        selected: PropTypes.array,
        handleChange: PropTypes.func.isRequired
    };

    render() {
        const {articles, selected, handleChange} = this.props
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))

        return <Select
            options={options}
            value={selected}
            onChange={handleChange}
            multi
        />
    }
}

export default SelectFilter