import React from 'react';
// import PropTypes from 'prop-types';

import './index.css';

class Logo extends React.Component {
  render() {
    return (
      <svg
        className="Logo"
        viewBox="0 0 250 250"
      >
        <polyline points="74.4,137.8 120.5,183.6 120.5,65 " />

        <polyline points="133.5,183 133.5,64.3 179.6,110.1 " />

        <rect
          x="37.8"
          y="36.2"
          transform="matrix(0.7071 0.7071 -0.7071 0.7071 124.5346 -52.556)"
          width="175.8"
          height="175.8"
        />
      </svg>
    );
  }
}

Logo.propTypes = {};

Logo.defaultProps = {};

export default Logo;
