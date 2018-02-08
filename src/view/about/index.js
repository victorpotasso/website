import React from 'react';
// import PropTypes from 'prop-types';
import BackgroundSky from './../../component/background/sky';
import Grid from './../../component/grid';
import GridTile from './../../component/grid/tile';
import InternalHeader from './../../component/internal-header';
import Footer from './../../component/footer';

import './index.css';

class AboutView extends React.Component {
  render() {
    return (
      <div className="AboutView">
        <BackgroundSky />
        <Grid>
          <InternalHeader title="AboutView" current={this.props.location.pathname} />

          <GridTile />

          <GridTile />

          <GridTile />

          <GridTile />

          <Footer />
        </Grid>
      </div>
    )
  }
}

AboutView.propTypes = {};

AboutView.defaultProps = {};

export default AboutView;
