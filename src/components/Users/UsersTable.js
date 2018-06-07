import React, { Component } from 'react';
//import users from '../../json/users';
import Table 			from './Table';
import SortOptions 		from './SortOptions';
import FilterOptions 		from './FilterOptions';


const USERS = {
  "data": [
    {
      "name":  "Jerry",
      "age": 39,
      "priority": 1,
      "category": "two"
    },
    {
      "name":  "Amy",
      "age": 28,
      "priority": 4,
      "category": "one"
    },
    {
      "name":  "Bernice",
      "age": 99,
      "priority": 2,
      "category": "two"
    },
    {
      "name":  "Antoine",
      "age": 50,
      "priority": 1,
      "category": "three"
    },
    {
      "name":  "Andrea",
      "age": 25,
      "priority": 1,
      "category": "three"
    },
    {
      "name":  "Fredrick",
      "age": 44,
      "priority": 3,
      "category": "one"
    },
    {
      "name":  "Mariel",
      "age": 34,
      "priority": 2,
      "category": "three"
    },
    {
      "name":  "Arnold",
      "age": 74,
      "priority": 4,
      "category": "two"
    },
    {
      "name":  "Janice",
      "age": 54,
      "priority": 2,
      "category": "two"
    }
  ]
};

class UsersTable extends Component {
	constructor(props){
		super(props);
		this.state = {
			users: USERS.data,
			priority: []
		}
  		this.alpha 			= this.alpha.bind(this);
  		this.priority 		= this.priority.bind(this);
  		this.default 		= this.default.bind(this);
  		this.handleFilter 	= this.handleFilter.bind(this);
	}

	componentDidMount(){
		const priority =  USERS.data.map(el => el.category)
						 .filter((el, idx, array) => array.indexOf(el) === idx)
		
		this.setState((prevState) => ({ priority }));		
	}

	default(){
		this.setState((prevState) => ({users: USERS.data}));
	}

	alpha(){
		const sorted = [...this.state.users]
						.sort((a, b) => a.name < b.name ? -1 : 1);

		this.setState((prevState) => ({users: sorted}));
	}

	priority(){
		const sorted = [...this.state.users]
						.sort((a, b) => a.priority < b.priority ? -1 : 1);

		this.setState((prevState) => ({users: sorted}));
	}

	handleFilter(val){
		const filtered = USERS.data.filter( user => user.category.includes(val) );
		
		this.setState((prevState) => ({users: filtered}))
	}

	render() {
		const { users, priority } = this.state;

		return (
			<div>
				<FilterOptions priority={priority} handleFilter={this.handleFilter} />
				<SortOptions alpha={this.alpha} defaultFunc={this.default} priority={this.priority} />
				<Table users={users} />
			</div>
		)
	}
}

export default UsersTable;