import React, { useReducer, createContext } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import NavbarComp from './Component/fungsional/NavbarComp';
import Home from './Component/fungsional/Home';
import AboutComp from './Component/fungsional/AboutComp';
import ListComp from './Component/fungsional/ListComp';
import HooksUseEffects from './Component/fungsional/HooksUseEffects';
import LoginComp from './Component/Hooks/LoginComp';
import RegisterComp from './Component/Hooks/RegisterComp';



export const AuthContext = createContext()

const initialState = {
  isAuthenticated: false,
  user: null,
  token: null
}


const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("user", JSON.stringify[action.payload.user])
      localStorage.setItem("token", JSON.stringify[action.payload.token])
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user
      }
    
    default:
      return state

  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    
    <BrowserRouter >
    <NavbarComp />
      <Switch >
        <AuthContext.Provider value={{
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
                pathname: "/"

              }}     
            /> &&
            <Redirect
              to={{
                pathname: "/Menu",

              }}  
              /> &&
              <Redirect
                to={{
                  pathname: "/mahasiswa",
  
                }}  
                />
          }
          <Route exact path="/login" component={LoginComp} />
          <Route exact path="/register" component={RegisterComp} />
          <Route exact path="/" component={Home} />
          <Route exact path="/Menu" component={AboutComp} />
          <Route exact path="/mahasiswa" component={ListComp} />
          <Route exact path="/data" component={HooksUseEffects} />
          <Route exact path="/Nav" component={NavbarComp} />
        </AuthContext.Provider>
      </Switch>
    </BrowserRouter>
  );
}


export default App; 