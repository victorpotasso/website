import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

import './index.css';

class NavMenu extends React.Component {
  render() {
    return (
      <div className="NavMenu">
        <ul>
          <li><Link to="/">home</Link></li>
          <li><Link to="/home/1">home with param 1</Link></li>
          <li><Link to="/home/2">home with param 2</Link></li>
          <li><Link to="/xxx">wrong link</Link></li>
        </ul>
      </div>
    );
  }
}

NavMenu.propTypes = {};

NavMenu.defaultProps = {};

export default NavMenu;
