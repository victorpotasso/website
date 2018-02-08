import React from 'react';
// import PropTypes from 'prop-types';

import GridTile from './../grid/tile';
import LogoLink from './../logo/link';
import NavMenu from './../nav-menu';

import './index.css';

class InternalHeader extends React.Component {
  render() {
    return (
      <div className="InternalHeader">
        <GridTile>
          <LogoLink to="/" />
        </GridTile>

        <GridTile/>

        <GridTile>
          <h1 className="InternalHeader__title">{this.props.title}</h1>
        </GridTile>

        <GridTile hover>
          <NavMenu current={this.props.current} />
        </GridTile>
      </div>
    );
  }
}

InternalHeader.propTypes = {};

InternalHeader.defaultProps = {};

export default InternalHeader;
