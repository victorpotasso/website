import React from 'react';
// import PropTypes from 'prop-types';


import BackgroundSky from './../../component/background/sky';
import Grid from './../../component/grid';
import GridTile from './../../component/grid/tile';
import Logo from './../../component/logo';
import NavMenu from './../../component/nav-menu';
import Footer from './../../component/footer';

import './index.css';

class HomeView extends React.Component {
  render() {
    return (
      <div className="HomeView">
        <BackgroundSky />
        <Grid>
          <GridTile hover>
            <Logo />
          </GridTile>
          <GridTile hover>
            <p style={{ fontSize: 90 }}>HELLO</p>
          </GridTile>

          <GridTile>
            World
          </GridTile>

          <GridTile />

          <GridTile hover>
            <img style={{ width: '100%' }} src="https://cdn.geekwire.com/wp-content/uploads/2016/01/slide-app-no-parking.gif" />
          </GridTile>

          <GridTile hover>
            <img style={{ width: '100%' }} src="https://instagram.fcgh9-1.fna.fbcdn.net/vp/8566a7f844f0862a9eeeb45f0026db0c/5B226FDC/t51.2885-15/s640x640/sh0.08/e35/14676780_159646414499242_1599104697547882496_n.jpg" />
          </GridTile>

          <GridTile hover>
            <img style={{ width: '100%' }} src="http://78.media.tumblr.com/tumblr_m7zda5FNx51r0z3y7o1_r1_400.gif" />
          </GridTile>

          <GridTile>
            <NavMenu />
          </GridTile>

          <Footer />
        </Grid>
      </div>
    )
  }
}

HomeView.propTypes = {};

HomeView.defaultProps = {};

export default HomeView;
