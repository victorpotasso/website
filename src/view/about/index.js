import React from 'react';
// import PropTypes from 'prop-types';

import ViewAboutContainer from './../../container/view/about';

import './index.css';

class AboutView extends React.Component {
  render() {
    return (
      <div className="AboutView">
        <ViewAboutContainer {...this.props} />
      </div>
    )
  }
}

AboutView.propTypes = {};

AboutView.defaultProps = {};

export default AboutView;
