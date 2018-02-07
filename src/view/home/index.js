import React from 'react';
// import PropTypes from 'prop-types';

import './index.css';

class HomeView extends React.Component {
  render() {
    return (
      <div className="HomeView">
        <h1>{_.camelCase('hello-world-at-home')}</h1>
        <p>param: {this.props.match.params.id}</p>
        <p>is dev: {String(APP_IS_DEV)}</p>
      </div>
    )
  }
}

HomeView.propTypes = {};

HomeView.defaultProps = {};

export default HomeView;
