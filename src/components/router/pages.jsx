import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../home/home';

const Pages = () => {
  return (
    <Switch>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default Pages;
