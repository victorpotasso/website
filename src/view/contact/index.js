import React from 'react';
// import PropTypes from 'prop-types';
import BackgroundSky from './../../component/background/sky';
import Grid from './../../component/grid';
import GridTile from './../../component/grid/tile';
import InternalHeader from './../../component/internal-header';
import Footer from './../../component/footer';

import './index.css';

class ContactView extends React.Component {
  render() {
    return (
      <div className="ContactView">
        <BackgroundSky />
        <Grid>
          <InternalHeader title="ContactView" current={this.props.location.pathname} />

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

ContactView.propTypes = {};

ContactView.defaultProps = {};

export default ContactView;
