import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

import Logo from './../../component/logo';

import * as AppActions from './../../data/app/actions';

import './index.css';

class LogoWithLinkContainer extends React.Component {
  render() {
    return (
      <div
        className="LogoWithLinkContainer"
        onClick={() => this.props.navigateTo(this.props.to)}
      >
        <Logo />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = (dispatch) => ({
  navigateTo: (pathname) => dispatch(AppActions.navigateTo(pathname)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogoWithLinkContainer);

LogoWithLinkContainer.propTypes = {};

LogoWithLinkContainer.defaultProps = {};

