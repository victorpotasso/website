import React from 'react';
// import PropTypes from 'prop-types';

import GridTile from './../grid/tile';
import SocialList from './../social-list';
import Image from './../image';

import './index.css';

class Footer extends React.Component {
  render() {
    return (
      <div className="Footer">
        <GridTile hover>
          <p style={{ fontSize: 40 }}>LET'S</p>
          <p style={{ fontSize: 80 }}>WORK</p>
          <p style={{ fontSize: 30 }}>TOGETHER</p>
        </GridTile>

        <GridTile hover>
          <p style={{ fontSize: 25 }}>Sao Paulo, Brazil</p>
          <p style={{ fontSize: 25 }}><a href="tel:+5511981546006" target="_blank">+55 11 98154 6006</a></p>
          <p style={{ fontSize: 25 }}><a href="mailto:victorpotasso@gmail.com" target="_blank">victorpotasso@gmail.com</a></p>
        </GridTile>
        
        <GridTile hover>
          <Image
            src="https://instagram.fcgh9-1.fna.fbcdn.net/vp/1ae4878db3a9ee6d9f948dda10a018c8/5B11CCAF/t51.2885-15/s640x640/sh0.08/e35/24175584_394739537629886_2062920264542322688_n.jpg"
            fluid
          />
        </GridTile>

        <GridTile>
          <SocialList />
        </GridTile>
      </div>
    );
  }
}

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
