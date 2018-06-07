import React 			from 'react';
import TableHeader 	from './TableHeader';     
import TableBody 	from './TableBody';        

const Table = ({ users }) => (
    <table>
    	<TableHeader />
    	<TableBody users={users} />
    </table>
);

export default Table;