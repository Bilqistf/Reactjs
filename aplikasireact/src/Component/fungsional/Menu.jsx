import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import NavbarComp from './NavbarComp'
import Home from './Home'; 
import AboutComp from './AboutComp';
import ListComp from './ListComp';
import HooksUseEffects from './HooksUseEffects';
const Menu = () => {
  return (
  <BrowserRouter >
    <NavbarComp/>
    <Switch >
    <Route exact path="/" component={Home} />
    <Route exact path="/Menu" component={AboutComp} />
    <Route exact path="/mahasiswa"component={ListComp}/> 
    <Route exact path="/data"component={HooksUseEffects}/>
      </Switch>
      </BrowserRouter>
  );
}
export default Menu;