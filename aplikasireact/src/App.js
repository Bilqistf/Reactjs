import React, { useReducer, createContext } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import NavbarComp from './Component/fungsional/NavbarComp';
import Home from './Component/fungsional/Home';
import HomePage from './Component/fungsional/HomePage';
import About from './Component/fungsional/AboutComp';
import ListComp from './Component/class/ListComp';
import TambahComp from './Component/class/TambahComp';
import EditComp from './Component/class/EditComp';
import KelasComp from './Component/Hooks/Class/KelasComp';
import HooksComp from './Component/Hooks/Fungsional/HooksComp';
import HooksUseEffects from './Component/Hooks/Fungsional/HooksUseEffects';
import ProductComp from './Component/Hooks/Fungsional/ProductComp';
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
    case "LOGOUT":
      localStorage.clear()
      return {
        ...state,
        isAuthenticated: false,
        user: action.payload.user
      }
    default:
      return state

  }
}

function App() {
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
                pathname: "/mahasiswa"

              }}
            />
          }
          <Route exact path="/login" component={LoginComp} />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/mahasiswa" component={ListComp} />
          <Route exact path="/mahasiswa/tambah" component={TambahComp} />
          <Route exact path="/mahasiswa/edit" component={EditComp} />
          <Route exact path="/kelas" component={KelasComp} />
          <Route exact path="/hooks" component={HooksComp} />
          <Route exact path="/useffects" component={HooksUseEffects} />
          <Route exact path="/produk" component={ProductComp} />
            <Route exact path="/register" component={RegisterComp} />

        </AuthContext.Provider>
      </Switch>
    </BrowserRouter>
  );
}


export default App; 