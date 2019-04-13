import React from 'react';
// import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/fontawesome-free-solid';

import './index.css';

class CardsContentTitle extends React.Component {
  render() {
    return (
      <div className="CardsContentTitle">
        <h1 className="CardsContentTitle__text">
          <span dangerouslySetInnerHTML={{ __html: this.props.text }} />
        </h1>
        <FontAwesomeIcon
          className="CardsContentTitle__arrow"
          size="2x"
          icon={faAngleRight}
          onClick={this.onClick}
        />
      </div>
    );
  }
}

CardsContentTitle.propTypes = {};

CardsContentTitle.defaultProps = {};

export default CardsContentTitle;
