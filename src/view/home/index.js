import React from 'react';
// import PropTypes from 'prop-types';

import ViewHomeContainer from './../../container/view/home';

import './index.css';

class HomeView extends React.Component {
  render() {
    return (
      <div className="HomeView">
        <ViewHomeContainer />
      </div>
    )
  }
}

HomeView.propTypes = {};

HomeView.defaultProps = {};

export default HomeView;
