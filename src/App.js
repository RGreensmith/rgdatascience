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
    <div className="footer">
      <a target="_blank" rel="noreferrer" href={"https://github.com/RGreensmith"}>
        <img src="footerLinkImages/GitHubLogo.png" className="footerLink" alt="GitHub Logo" />
      </a>
      <a target="_blank" rel="noreferrer" href={"https://www.linkedin.com/in/rosemary-greensmith-018b01b5/"}>
        <img src="footerLinkImages/linkedInLogo.png" className="footerLink" alt="LinkedIn Logo" />
      </a>
      <a target="_blank" rel="noreferrer" href={"https://twitter.com/RVGreensmith"}>
        <img src="footerLinkImages/twitterLogo.png" className="footerLink" alt="Twitter Logo" />
      </a>
    </div>
  </Router>
);

export default App;