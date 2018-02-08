import React from 'react';
// import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/fontawesome-free-solid';

import GridTile from './../grid/tile';
import LogoLink from './../logo/link';
import NavMenu from './../nav-menu';

import './index.css';

class InternalHeader extends React.Component {
  render() {
    return (
      <div className="InternalHeader">
        <GridTile hover>
          <LogoLink to="/" />
        </GridTile>

        <GridTile/>

        <GridTile>
          <NavMenu />
        </GridTile>

        <GridTile hover>
          <FontAwesomeIcon icon={faTimes} size="6x" />
        </GridTile>
      </div>
    );
  }
}

InternalHeader.propTypes = {};

InternalHeader.defaultProps = {};

export default InternalHeader;
