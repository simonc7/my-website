import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import { HomePage } from './HomePage.js';
import { ExperiencePage } from './ExperiencePage.js';
import { ProjectsPage } from './ProjectsPage.js';

function App() {
  return (
    <div>
      <title>My Website</title>
      <Switch>
        <Route exact path="/home"><HomePage/></Route>
        <Route exact path="/experience"><ExperiencePage/></Route>
        <Route exact path="/projects"><ProjectsPage/></Route>
        <Redirect to="/home"></Redirect>
      </Switch>
    </div>
  );
}

export default App;
