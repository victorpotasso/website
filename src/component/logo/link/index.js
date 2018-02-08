import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

import Logo from './../index';

import './index.css';

class LogoLink extends React.Component {
  render() {
    return (
      <Link
        className="LogoLink"
        to={this.props.to}
      >
        <Logo />
      </Link>
    );
  }
}

LogoLink.propTypes = {};

LogoLink.defaultProps = {};

export default LogoLink;
