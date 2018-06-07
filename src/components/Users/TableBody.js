import React from 'react'; 
import TableRows 	from './TableRows';   
import PropTypes from 'prop-types';
    
const TableBody = ({ users }) => (
	<tbody>
		{users.map( user => <TableRows key={user.name} {...user} /> )}
	</tbody>
);

export default TableBody;

TableBody.propTypes = {
	users: PropTypes.array.isRequired,
}