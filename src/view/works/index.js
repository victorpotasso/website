import React from 'react';
// import PropTypes from 'prop-types';
import BackgroundSky from './../../component/background/sky';
import Grid from './../../component/grid';
import GridTile from './../../component/grid/tile';
import InternalHeader from './../../component/internal-header';
import Footer from './../../component/footer';

import './index.css';

class WorksView extends React.Component {
  render() {
    return (
      <div className="WorksView">
        <BackgroundSky />
        <Grid>
          <InternalHeader title="WorksView" current={this.props.location.pathname} />

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

WorksView.propTypes = {};

WorksView.defaultProps = {};

export default WorksView;
