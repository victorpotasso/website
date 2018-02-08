import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

import BackgroundSky from './../../component/background/sky';
import Grid from './../../component/grid';
import GridTile from './../../component/grid/tile';
import InternalHeader from './../../component/internal-header';
import Footer from './../../component/footer';

import './index.css';

class NotFoundView extends React.Component {
  render() {
    return (
      <div className="NotFoundView">
        <BackgroundSky />
        <Grid>
          <InternalHeader />

          <GridTile>
            NOT
          </GridTile>

          <GridTile>
            FOUND
          </GridTile>

          <GridTile />

          <GridTile />

          <Footer />
        </Grid>
      </div>
    )
  }
}

NotFoundView.propTypes = {};

NotFoundView.defaultProps = {};

export default NotFoundView;
