import React      		from 'react';
import UsersPage       	from './UsersPage'; 

const Home = ({match}) => 
  <div>
    <h3>{match.params.page}</h3>
    <UsersPage />
  </div>

export default Home;