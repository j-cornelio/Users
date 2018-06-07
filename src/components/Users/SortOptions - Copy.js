import React from 'react';

const SortOptions = ({ alpha, defaultFunc, priority }) => (
	<div>
		<span>Sort by:</span> 
		<button onClick={defaultFunc}>default</button>
		<button onClick={alpha}>alphabetical</button>
		<button onClick={priority}>priority</button>
	</div>
);

export default SortOptions;