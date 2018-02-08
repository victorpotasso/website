import React from 'react';
// import PropTypes from 'prop-types';
import cn from 'classnames';

import './index.css';

class Image extends React.Component {
  render() {
    return (
      <img
        className={cn(
          'Image',
          {
            'Image--fluid': this.props.fluid,
          }
        )}
        src={this.props.src}
      />
    );
  }
}

Image.propTypes = {};

Image.defaultProps = {};

export default Image;
