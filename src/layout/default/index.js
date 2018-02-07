import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

import './index.css';

class DefaultLayout extends React.Component {
  render() {
    return (
      <div className="DefaultLayout">
        <div className="DefaultLayout__header">
          <ul>
            <li><Link to="/">home</Link></li>
            <li><Link to="/home/1">home with param</Link></li>
            <li><Link to="/xxx">wrong link</Link></li>
          </ul>
        </div>

        <div className="DefaultLayout__content">
          {this.props.children}
        </div>

        <div className="DefaultLayout__footer">
          FOOTER
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
