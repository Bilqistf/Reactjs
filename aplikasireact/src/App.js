import React, { useState } from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import NavbarComp from './Component/fungsional/NavbarComp';
import HomePage from './Component/fungsional/HomePage';
import About from './Component/fungsional/AboutComp';
import ListComp from './Component/class/ListComp';
import TambahComp from './Component/class/TambahComp';
import EditComp from './Component/class/EditComp';
import KelasComp from './Component/Hooks/Class/KelasComp';
import HooksComp from './Component/Hooks/Fungsional/HooksComp';
import HooksUseEffects from './Component/Hooks/Fungsional/HooksUseEffects';
import { CartContext } from './CartContext';
import ProductComp from './Component/Hooks/Fungsional/ProductComp';
const App = () => {

  const[value, setValue] = useState(10)
  return (
  <BrowserRouter >
  <CartContext.Provider value={{value, setValue}}>
    <NavbarComp />
    <Switch >
      <Route exact path="/"component={HomePage}/> 
      <Route exact path="/about"component={About}/> 
      <Route exact path="/mahasiswa"component={ListComp}/> 
      <Route exact path="/mahasiswa/tambah" component={TambahComp} />
      <Route exact path="/mahasiswa/edit" component={EditComp} />
      <Route exact path="/kelas" component={KelasComp} />
      <Route exact path="/hooks" component={HooksComp} />
      <Route exact path="/useffects" component={HooksUseEffects} />
      <Route exact path="/produk" component={ProductComp} />
    

      
  
      </Switch>
      </CartContext.Provider>
      </BrowserRouter>
  );
}
export default App; 
