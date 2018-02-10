import React from 'react';
// import PropTypes from 'prop-types';

import ViewNotFoundContainer from './../../container/view/not-found';

import './index.css';

class NotFoundView extends React.Component {
  render() {
    return (
      <div className="NotFoundView">
        <ViewNotFoundContainer {...this.props} />
      </div>
    )
  }
}

NotFoundView.propTypes = {};

NotFoundView.defaultProps = {};

export default NotFoundView;
