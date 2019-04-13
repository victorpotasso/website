import React from 'react';
// import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faTwitter,
  faLinkedin,
} from '@fortawesome/fontawesome-free-brands';

import './index.css';

class SocialList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fontSize: '3x',
    };

    this.onResize = this.onResize.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.onResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }

  onResize() {
    this.setState({
      fontSize: window.innerWidth > 599 ? '3x' : '2x',
    });
  }

  render() {
    return (
      <div className="SocialList">
        <ul>
          <li>
            <a href="https://www.github.com/victorpotasso" target="_blank" title="Github">
              <FontAwesomeIcon icon={faGithub} size={this.state.fontSize} />
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com/victorpotasso" target="_blank" title="Twitter">
              <FontAwesomeIcon icon={faTwitter} size={this.state.fontSize} />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/victorpotasso" target="_blank" title="LinkedIn">
              <FontAwesomeIcon icon={faLinkedin} size={this.state.fontSize} />
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
