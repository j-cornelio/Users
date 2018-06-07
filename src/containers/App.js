import React            from 'react';
import Home             from './HomePage';

import { 
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

const App = () => (
  <Router>
    <div>
      <Link to='/'>Homepage</Link>{' '} | {' '}

      <hr />
      <Route exact path='/'         component={Home} />
    </div>
  </Router>
)

export default App;
