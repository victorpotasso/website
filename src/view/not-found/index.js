import React from 'react';
// import PropTypes from 'prop-types';

import BackgroundSky from './../../component/background/sky';
import Grid from './../../component/grid';
import Image from './../../component/image';
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
          <InternalHeader title="404" />

          <GridTile hover>
            <p style={{ fontSize: 60 }}>Oops!</p>
          </GridTile>

          <GridTile>
            <p style={{ fontSize: 40 }}>{`Page "${this.props.location.pathname.replace('/', '')}"`}</p>
            <p style={{ fontSize: 40 }}>not found</p>
          </GridTile>

          <GridTile />

          <GridTile hover>
            <Image
              src="http://img2.timeinc.net/people/i/2015/news/150309/parks-rec-6-600.gif"
              fluid
            />
          </GridTile>

          <Footer />
        </Grid>
      </div>
    )
  }
}

NotFoundView.propTypes = {};

NotFoundView.defaultProps = {};

export default NotFoundView;
