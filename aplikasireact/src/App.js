import React from 'react';

import {BrowserRouter,Route,Switch} from 'react-router-dom'
import NavbarComp from './Component/fungsional/NavbarComp';
import HomePage from './Component/fungsional/HomePage';
import About from './Component/fungsional/AboutComp';

const App = () => {
  return (<BrowserRouter >
    <NavbarComp />
    <Switch >
      <Route exact path="/"component={HomePage}/> 
      <Route exact path="/about"component={About}/> 
      </Switch>
      </BrowserRouter>
  );
}
export default App; 
