import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

function Pagination({ currentPage, totalRecords, pageSize, path }) {
    var contPage = Math.ceil(totalRecords / pageSize);
    const pageList = Array.from(Array(contPage).keys());
    const pages = pageList.map((item) => {
        ++item;
        const to = {
            pathname: '/comments/' + item,
          } 
        return <li key={item}>{parseInt(currentPage) !== item ? <Link to={to}>{item}</Link> : item}</li>
    });
    
    return (
        <ul key={currentPage}>
            {pages}
        </ul>
    )
}

export default connect(null)(Pagination)