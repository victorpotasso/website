import React from 'react';
// import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faLinkedin,
} from '@fortawesome/fontawesome-free-brands';

import './index.css';

class SocialList extends React.Component {
  render() {
    return (
      <div className="SocialList">
        <ul>
          <li>
            <a href="" target="_blank" title="Facebook">
              <FontAwesomeIcon icon={faFacebook} size="4x" />
            </a>
          </li>
          <li>
            <a href="" target="_blank" title="Twitter">
              <FontAwesomeIcon icon={faTwitter} size="4x" />
            </a>
          </li>
          <li>
            <a href="" target="_blank" title="LinkedIn">
              <FontAwesomeIcon icon={faLinkedin} size="4x" />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

SocialList.propTypes = {};

SocialList.defaultProps = {};

export default SocialList;
