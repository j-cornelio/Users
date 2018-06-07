import React from 'react';
import PropTypes from 'prop-types';

const TableRows = ({ age, name, category }) => (
    <tr>
    	<td>{age}</td>
    	<td>{name}</td>
    	<td>{category}</td>
    </tr>
);

export default TableRows;

TableRows.propTypes = {
	age: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	category: PropTypes.string.isRequired,
}