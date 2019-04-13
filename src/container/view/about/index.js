import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

import BackgroundSky from './../../../component/background/sky';
import Grid from './../../../component/grid';
import GridTile from './../../../component/grid/tile';
import InternalHeader from './../../../component/internal-header';
import Footer from './../../../component/footer';
import CardsContentTitle from './../../../component/cards/content-title';
import CardsContentText from './../../../component/cards/content-text';

import * as AppSelectors from './../../../data/app/selectors';

import './index.css';

class ViewAboutContainer extends React.Component {
  render() {
    return (
      <div className="ViewAboutContainer">
        <BackgroundSky />
        <Grid>
          <InternalHeader
            title="About"
            current={this.props.location.pathname}
            transition={this.props.navigationStatus}
          />

          <GridTile transition={this.props.navigationStatus}>
            <CardsContentTitle text="A little brief about me" />
          </GridTile>
          <GridTile transition={this.props.navigationStatus}>
            <CardsContentText text="I was born and raised in Sao Paulo, Brazil and living in Auckland. I have a plant based diet (strict vegetarian), play drums, music lover and trying to get a healthy life." />
          </GridTile>

          <GridTile transition={this.props.navigationStatus}>
            <CardsContentTitle text="Tech<br/>that<br/>I use" />
          </GridTile>
          <GridTile transition={this.props.navigationStatus}>
            <CardsContentText text="JS, CSS, HTML5" />
          </GridTile>

          <GridTile transition={this.props.navigationStatus}>
            <CardsContentTitle text="Tools<br/>that<br/>I use" />
          </GridTile>
          <GridTile transition={this.props.navigationStatus}>
            <CardsContentText text="VSCode, GIT, Chrome Dev Tools" />
          </GridTile>

          <GridTile transition={this.props.navigationStatus}>
            <CardsContentTitle text="Cool<br/>subjects" />
          </GridTile>
          <GridTile transition={this.props.navigationStatus}>
            <CardsContentText text="Math, Physics, Music, Engineering" />
          </GridTile>

          <Footer transition={this.props.navigationStatus} />
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  navigationStatus: AppSelectors.navigationStatus(state),
});

const mapDispatchToProps = (dispatch, ownProps) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewAboutContainer);

ViewAboutContainer.propTypes = {};

ViewAboutContainer.defaultProps = {};

