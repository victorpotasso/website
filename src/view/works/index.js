import React from 'react';
// import PropTypes from 'prop-types';

import ViewWorksContainer from './../../container/view/works';

import './index.css';

class WorksView extends React.Component {
  render() {
    return (
      <div className="WorksView">
        <ViewWorksContainer {...this.props} />
      </div>
    )
  }
}

WorksView.propTypes = {};

WorksView.defaultProps = {};

export default WorksView;
