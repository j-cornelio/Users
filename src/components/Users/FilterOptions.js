import React from 'react';
import PropTypes from 'prop-types';

const FilterOptions = ({ priority, handleFilter }) => {
	const filter = (e) => handleFilter(e.target.value);

	return (
		<div>	
			<div>Filter by Category</div>				 	
			<form>
				{
					 priority.map( elem => (
					 	<span key={elem}>
					 		<input type="radio" id="contactChoice1" onClick={filter} name="priority" value={elem} />
						    <label>{elem}</label>
					    </span> 
					 ))
				}
			</form>
		</div>
	)
};//

export default FilterOptions;

FilterOptions.propTypes = {
	handleFilter: PropTypes.func.isRequired,
	priority: PropTypes.array.isRequired,
}