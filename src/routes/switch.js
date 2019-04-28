import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import { Transition, TransitionGroup } from 'react-transition-group';
import { play, exit } from './../timelines'

function Switch ({ children }) {
  return (
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
              {children}
            </Switch>
          </Transition>
        </TransitionGroup>
      )
    }} />
  );
}

export default Switch;