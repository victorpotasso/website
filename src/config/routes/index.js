import React from 'react';
import { BrowserRouter, Switch, Router, Route } from 'react-router-dom'
// import { syncHistoryWithStore } from 'react-router-redux';
import { ConnectedRouter } from 'react-router-redux'

import history from './history';

import DefaultLayout from './../../layout/default';
import HomeView from './../../view/home';
import AboutView from './../../view/about';
import WorksView from './../../view/works';
import ContactView from './../../view/contact';
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
            path="/about"
            layout={DefaultLayout}
            component={AboutView}
          />
          <RouteWithLayout
            path="/works"
            layout={DefaultLayout}
            component={WorksView}
          />
          <RouteWithLayout
            path="/contact"
            layout={DefaultLayout}
            component={ContactView}
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
