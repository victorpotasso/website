import React from 'react';
// import PropTypes from 'prop-types';

import GridTile from './../grid/tile';
import LogoWithLink from './../../container/logo-with-link';
import NavMenu from './../nav-menu';

import './index.css';

class InternalHeader extends React.Component {
  render() {
    return (
      <div className="InternalHeader">
        <GridTile transition={this.props.transition}>
          <LogoWithLink to="/" />
        </GridTile>

        <GridTile transition={this.props.transition} />

        <GridTile transition={this.props.transition} >
          <h1 className="InternalHeader__title">{this.props.title}</h1>
        </GridTile>

        <GridTile hover transition={this.props.transition}>
          <NavMenu current={this.props.current} />
        </GridTile>
      </div>
    );
  }
}

InternalHeader.propTypes = {};

InternalHeader.defaultProps = {};

export default InternalHeader;
