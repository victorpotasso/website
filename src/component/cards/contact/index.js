import React from 'react';
// import PropTypes from 'prop-types';

import './index.css';

class CardsContact extends React.Component {
  render() {
    return (
      <div className="CardsContact">
        <p className="CardsContact__place">Auckland, NZ</p>
        <p className="CardsContact__email">
          <a href="mailto:victorpotasso@gmail.com" target="_blank">victorpotasso@gmail.com</a>
        </p>
      </div>
    );
  }
}

CardsContact.propTypes = {};

CardsContact.defaultProps = {};

export default CardsContact;
