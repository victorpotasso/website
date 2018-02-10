import React from 'react';
// import PropTypes from 'prop-types';

import './index.css';

class CardsContentText extends React.Component {
  render() {
    return (
      <div className="CardsContentText">
        <p className="CardsContentText__text">
          <span dangerouslySetInnerHTML={{ __html: this.props.text }} />
        </p>
      </div>
    );
  }
}

CardsContentText.propTypes = {};

CardsContentText.defaultProps = {};

export default CardsContentText;
