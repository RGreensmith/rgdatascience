import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Page from './components/page';
import Home from './components/home';
import Navbar from './components/navbar';
import About from './pageDefinitions/About.json';
import pages from './pages';

const App = () => (
  <Router>
    <Navbar pages={pages} />
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