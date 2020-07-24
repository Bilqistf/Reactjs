import React, { useContext } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { AuthContext } from '../../App';

const Menu = () => {
  const { state, dispatch } = useContext(AuthContext)
  return (
    <BrowserRouter >
      <Switch >

      </Switch>
    </BrowserRouter>
  );
}
export default Menu;