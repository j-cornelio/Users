import React      		from 'react';

const TableRows = ({ age, name, category }) => (
    <tr>
    	<td>{age}</td>
    	<td>{name}</td>
    	<td>{category}</td>
    </tr>
);


const Table = ({ users }) => (
    <table>
    	<tbody>
    		{users.map( user => <TableRows key={user.name} {...user} />)}
    	</tbody>
    </table>
);

export default Table;