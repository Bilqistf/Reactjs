import React from 'react';

import {BrowserRouter,Route,Switch} from 'react-router-dom'
import NavbarComp from './Component/fungsional/NavbarComp';
import HomePage from './Component/fungsional/HomePage';
import About from './Component/fungsional/AboutComp';
import DetailComp from './Component/fungsional/DetailComp';

const App = () => {
  return (<BrowserRouter >
    <NavbarComp />
    <Switch >
      <Route exact path="/"component={HomePage}/> 
      <Route exact path="/about"component={About}/> 
      <Route exact path="/detail/:id"component={DetailComp}/> 
      </Switch>
      </BrowserRouter>
  );
}
export default App; 
