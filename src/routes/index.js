import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import AnimatedSwitch from './switch';

import history from './history';
import HomeView from './../views/home';
import PostsView from './../views/posts';
import NotFoundView from './../views/not-found';

export default () => (
  <Router history={history}>
    <AnimatedSwitch>
      <Route exact path='/' component={HomeView} />
      <Route exact path='/posts' component={PostsView} />
      <Route component={NotFoundView} />
    </AnimatedSwitch>
  </Router>
);
