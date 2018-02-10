import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

import BackgroundSky from './../../../component/background/sky';
import Grid from './../../../component/grid';
import GridTile from './../../../component/grid/tile';
import Logo from './../../../component/logo';
import CardsMenuContainer from './../../../container/cards/menu';
import Footer from './../../../component/footer';
import Image from './../../../component/image';

import * as AppSelectors from './../../../data/app/selectors';

import './index.css';

class ViewHomeContainer extends React.Component {
  render() {
    return (
      <div className="ViewHomeContainer">
        <BackgroundSky interactive pulse />
        {/* <BackgroundSky pulse /> */}
        {/* <BackgroundSky /> */}
        <Grid>
          <GridTile transition={this.props.navigationStatus} hover>
            <Logo />
          </GridTile>

          <GridTile transition={this.props.navigationStatus} hover>
            <p style={{ fontSize: 35 }}>Victor Potasso</p>
            <p style={{ fontSize: 18 }}>Front End Developer</p>
          </GridTile>

          <GridTile transition={this.props.navigationStatus} />

          <GridTile transition={this.props.navigationStatus}>
            <CardsMenuContainer />
          </GridTile>

          <GridTile transition={this.props.navigationStatus} hover>
            <Image
              src="https://cdn.geekwire.com/wp-content/uploads/2016/01/slide-app-no-parking.gif"
              fluid
            />
          </GridTile>

          <GridTile transition={this.props.navigationStatus} hover>
            <Image
              src="https://instagram.fcgh9-1.fna.fbcdn.net/vp/8566a7f844f0862a9eeeb45f0026db0c/5B226FDC/t51.2885-15/s640x640/sh0.08/e35/14676780_159646414499242_1599104697547882496_n.jpg"
              fluid
            />
          </GridTile>

          <GridTile transition={this.props.navigationStatus} />

          <GridTile transition={this.props.navigationStatus} hover>
            <Image
              src="http://78.media.tumblr.com/tumblr_m7zda5FNx51r0z3y7o1_r1_400.gif"
              fluid
            />
          </GridTile>

          <Footer transition={this.props.navigationStatus} />
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  navigationStatus: AppSelectors.navigationStatus(state),
});

const mapDispatchToProps = (dispatch, ownProps) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewHomeContainer);

ViewHomeContainer.propTypes = {};

ViewHomeContainer.defaultProps = {};
