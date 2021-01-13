import React from 'react';
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Page from './components/page';
import About from './pageDefinitions/About.json';
import CNN from './pageDefinitions/CNN.json';
import ClassificationApplication from './pageDefinitions/ClassificationApplication.json';
import classificationExplanations from './pageDefinitions/classificationExplanations.json';
import shellCrash from './pageDefinitions/shellCrash.json';
import installZsh from './pageDefinitions/installZsh.json';



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
        <li>
          <Link to="/cnn">Convolutional Neural Networks</Link>
        </li>
        <li>
          <Link to="/classificationExplanations">Classification Algorithm Intro</Link>
        </li>
        <li>
          <Link to="/ClassificationApplication">Classification Application</Link>
        </li>
        <li>
          <Link to="/shellcrash">Debian Shell Crash Solution</Link>
        </li>
        <li>
          <Link to="/installZsh">How to install Zsh</Link>
        </li>
        
      </ul>
    </nav>
    <Switch>
      <Route path="/About" >
        <Page description={About} />
      </Route>
      <Route path="/cnn" >
        <Page description={CNN} />
      </Route>
      <Route path="/classificationExplanations" >
        <Page description={classificationExplanations} />
      </Route>
      <Route path="/ClassificationApplication" >
        <Page description={ClassificationApplication} />
      </Route>
      <Route path="/shellcrash" >
        <Page description={shellCrash} />
      </Route>
      <Route path="/installZsh" >
        <Page description={installZsh} />
      </Route>
      
    </Switch>
  </Router>
);

export default App;