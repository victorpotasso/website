import React from 'react';
import { BrowserRouter, Switch, Router, Route } from 'react-router-dom'
// import { syncHistoryWithStore } from 'react-router-redux';
import { ConnectedRouter } from 'react-router-redux'

import history from './history';

import DefaultLayout from './../../layout/default';
import HomeView from './../../view/home';
import NotFoundView from './../../view/not-found';

const RouteWithLayout = ({ layout, component, ...rest }) => (
  <Route {...rest} render={(props) => React.createElement(layout, props, React.createElement(component, props))} />
);

export default (store) => {
  return (
    <ConnectedRouter history={history}>
      <BrowserRouter>
        <Switch>
          <RouteWithLayout
            exact path="/"
            layout={DefaultLayout}
            component={HomeView}
          />
          <RouteWithLayout
            path="/home/:id"
            layout={DefaultLayout}
            component={HomeView}
          />
          <RouteWithLayout
            layout={DefaultLayout}
            component={NotFoundView}
          />
        </Switch>
      </BrowserRouter>
    </ConnectedRouter>
  );
};
