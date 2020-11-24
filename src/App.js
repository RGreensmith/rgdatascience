import React from 'react';
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Page from './components/page';
import CNN from './pageDefinitions/CNN.json';
import shellCrash from './pageDefinitions/shellCrash.json'

const App = () => (
  <Router>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cnn">CNN</Link>
        </li>
        <li>
          <Link to="/shellcrash">Shell Crash</Link>
        </li>
      </ul>
    </nav>
    <Switch>
      <Route path="/cnn" >
        <Page description={CNN} />
      </Route>
      <Route path="/shellcrash" >
        <Page description={shellCrash} />
      </Route>
    </Switch>
  </Router>
);

export default App;