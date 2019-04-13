import React from 'react';
// import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/fontawesome-free-solid';

import './index.css';

class CardsWorkDetails extends React.Component {
  render() {
    return (
      <div className="CardsWorkDetails">
        {!!this.props.company &&
          <p className="CardsWorkDetails__company">
            <a href={this.props.companyLink} target="_blank" title="Company link"><b>c:</b> {this.props.company}</a>
          </p>
        }
        {!!this.props.role &&
          <p className="CardsWorkDetails__role"><b>r:</b> {this.props.role}</p>
        }
        {!!this.props.description &&
          <p className="CardsWorkDetails__description"><b>d:</b> {this.props.description}</p>
        }
        {!!this.props.link &&
          <a className="CardsWorkDetails__link" href={this.props.link} target="_blank" title="Work link">
            <FontAwesomeIcon
              className="CardsWorkDetails__link__icon"
              icon={faLink}
            />
          </a>
        }
      </div>
    );
  }
}

CardsWorkDetails.propTypes = {};

CardsWorkDetails.defaultProps = {};

export default CardsWorkDetails;
