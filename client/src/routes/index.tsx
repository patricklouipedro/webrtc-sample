import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../containers/home';
import Room from '../containers/room';

const Routes: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/room/:id?" component={Room} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
