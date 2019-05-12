import React from 'react';
import { Switch, withRouter } from 'react-router-dom';
import { useTransition, animated } from "react-spring";

function AnimatedSwitch ({ location, children }) {
  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0, transform: "translate(20%, 0)" },
    enter: { opacity: 1, transform: "translate(0%, 0)" },
    leave: { opacity: 0, transform: "translate(-20%, 0)" }
  });

  return transitions.map(({ item, props, key }) => (
    <animated.div key={key} style={props}>
      <Switch location={item}>
        {children}
      </Switch>
    </animated.div>
  ));
}

export default withRouter(AnimatedSwitch);