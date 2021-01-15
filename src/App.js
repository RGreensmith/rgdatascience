import React from 'react';
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Page from './components/page';
import Home from './components/home';
import About from './pageDefinitions/About.json';
import pages from './pages';

const App = () => (
  <Router>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        {
          pages.map(({title, path}) => (
            <li>
              <Link to={path}>{title}</Link>
            </li>
          ))
        }
      </ul>
    </nav>
    <Switch>
      <Route path="/About" >
        <Page description={About} />
      </Route>
      {
        pages.map(({path, description}) => (
          <Route path={path} >
            <Page description={description} />
          </Route>
        ))
      }
      <Route path="/" >
        <Home/>
      </Route>
    </Switch>
  </Router>
);

export default App;