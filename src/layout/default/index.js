import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

class DefaultLayout extends React.Component {
  render() {
    return (
      <div className="DefaultLayout">
        <div className="DefaultLayout__content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

DefaultLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

DefaultLayout.defaultProps = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default DefaultLayout;
