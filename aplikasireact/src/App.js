import React, { useReducer, createContext } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import LoginComp from './Component/Hooks/LoginComp';
import RegisterComp from './Component/Hooks/RegisterComp';
import Home from './Component/fungsional/Home';
import Menu from './Component/fungsional/Menu';
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
                pathname: "/menu"

              }}
            />
          }
          <Route exact path="/login" component={LoginComp} />
          <Route exact path="/register" component={RegisterComp} />
          <Route exact path="/menu" component={Menu} />
        </AuthContext.Provider>
      </Switch>
    </BrowserRouter>
  );
}


export default App; 