import React, {useReducer, createContext } from 'react';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import NavbarComp from './Component/fungsional/NavbarComp';
import Home from './Component/fungsional/Home';
import AboutComp from './Component/fungsional/AboutComp';
import ListComp from './Component/fungsional/ListComp';
import TambahComp from './Component/class/TambahComp';
import EditComp from './Component/class/EditComp';
import './App.css';
import Aktivitas from './Component/fungsional/Aktivitas';
import LoginComp from './Component/Hooks/LoginComp';
import RegisterComp from './Component/Hooks/RegisterComp';
import HomePage from './Component/fungsional/HomePage';
export const AuthContext = createContext()

//inisiasi state
const initalState = {
isAuthenticated: false,
user: null,
token: null
}

const reducer = (state, action) => {
  switch(action.type) {
    case "LOGIN":
      localStorage.setItem("user", JSON.stringify(action.payload.user))
      localStorage.setItem("token", JSON.stringify(action.payload.token))
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        }

case "LOGOUT":
  localStorage.clear()
  return {
    ...state,
    isAuthenticated: false,
    user : null
  }

  default:
    return state
} 
}
 

function App () {

  const[state, dispatch] = useReducer(reducer, initalState)
  
  return (
    <BrowserRouter>
      <NavbarComp />
      <Switch>
        <AuthContext.Provider value= {{
          state,
          dispatch
        }}>
          <Home/>
          {!state.isAuthenticated ?
            <Redirect
              to={{
                pathname: "/login"
              }}
            /> :
            <Redirect
              to={{
                pathname: "/menu"

              }}
            />
          }
        <Route exact path="/layanan" component={AboutComp} />
        <Route exact path="/aktivitas" component={Aktivitas} />
        <Route exact path="/login" component={LoginComp} />
        <Route exact path="/daftar" component={RegisterComp} />
        <Route exact path="/paket/tambah" component={TambahComp} />
        <Route exact path="/menu/edit" component={EditComp} />
        <Route exact path="/menu" component={ListComp} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/utama" component={HomePage} />
        </AuthContext.Provider>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
