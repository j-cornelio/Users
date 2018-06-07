import React from 'react';
        
const TableHeader = () => (
    <thead>
      <tr>
        <th>Age</th>
        <th>Name</th>
        <th>Category</th>
      </tr>
    </thead>
);//
        
const TableBody = ({ users }) => (
	<tbody>
		{users.map( user => <TableRows key={user.name} {...user} /> )}
	</tbody>
);//
        
const TableRows = ({ age, name, category }) => (
    <tr>
    	<td>{age}</td>
    	<td>{name}</td>
    	<td>{category}</td>
    </tr>
);


const Table = ({ users }) => (
    <table>
    	<TableHeader />
    	<TableBody users={users} />
    </table>
);

export default Table;