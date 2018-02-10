import React from 'react';
// import PropTypes from 'prop-types';

import './index.css';

class GridTileTitle extends React.Component {
  render() {
    return (
      <h1 className="GridTileTitle">
        <span dangerouslySetInnerHTML={{ __html: this.props.text }} />
      </h1>
    );
  }
}

GridTileTitle.propTypes = {};

GridTileTitle.defaultProps = {};

export default GridTileTitle;
