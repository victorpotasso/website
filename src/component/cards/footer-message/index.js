import React from 'react';
// import PropTypes from 'prop-types';

import './index.css';

class CardsFooterMessage extends React.Component {
  render() {
    return (
      <div className="CardsFooterMessage">
        <p style={{ fontSize: 40 }}>LET'S</p>
        <p style={{ fontSize: 80 }}>WORK</p>
        <p style={{ fontSize: 30 }}>TOGETHER</p>
      </div>
    );
  }
}

CardsFooterMessage.propTypes = {};

CardsFooterMessage.defaultProps = {};

export default CardsFooterMessage;
