import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { Transition, TransitionGroup } from 'react-transition-group';
import { play, exit } from './../timelines'

import history from './history';
import HomeView from './../views/home';
import PostsView from './../views/posts';
import NotFoundView from './../views/not-found';

export default () => (
  <Router history={history}>
    <Route render={({ location }) => {
      const { pathname, key } = location;
      return (
        <TransitionGroup component={null}>
          <Transition
            key={key}
            appear
            onEnter={(node, appears) => play(pathname, node, appears)}
            onExit={(node, appears) => exit(pathname, node, appears)}
            timeout={{ enter: 750, exit: 750 }}
          >
            <Switch location={location}>
              <Route exact path='/' component={HomeView} />
              <Route exact path='/posts' component={PostsView} />
              <Route component={NotFoundView} />
            </Switch>
          </Transition>
        </TransitionGroup>
      )
    }} />
  </Router>
);
