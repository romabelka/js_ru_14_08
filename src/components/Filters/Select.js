import React, { Component, PropTypes } from 'react'
import Select from 'react-select'

import 'react-select/dist/react-select.css'
import {connect} from 'react-redux';
import {selectArticle} from '../../AC';

class SelectFilter extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    };

    handleSelectionChange = selected => {
        this.props.selectArticle(selected);
    };

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

export default connect(
    state => ({selected: state.articleSelect}),
    {selectArticle}
)(SelectFilter);