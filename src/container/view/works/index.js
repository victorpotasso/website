import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

import BackgroundSky from './../../../component/background/sky';
import Grid from './../../../component/grid';
import GridTile from './../../../component/grid/tile';
import GridTileTitle from './../../../component/grid/tile/title';
import Image from './../../../component/image';
import InternalHeader from './../../../component/internal-header';
import Footer from './../../../component/footer';
import CardsContentTitle from './../../../component/cards/content-title';
import CardsContentText from './../../../component/cards/content-text';

import * as AppSelectors from './../../../data/app/selectors';

import './index.css';

class ViewWorksContainer extends React.Component {
  render() {
    return (
      <div className="ViewWorksContainer">
        <BackgroundSky />
        <Grid>
          <InternalHeader
            title="Works"
            current={this.props.location.pathname}
            transition={this.props.navigationStatus}
          />

          <GridTile hover transition={this.props.navigationStatus}>
            <CardsContentTitle text="What<br/>I've<br/>done" />
          </GridTile>
          <GridTile transition={this.props.navigationStatus}>
            <CardsContentText text="These are just some of my works throughout the last years." />
          </GridTile>

          <GridTile hover transition={this.props.navigationStatus}>
            <GridTileTitle text="Win with<br/>Vodafone" />
          </GridTile>
          <GridTile transition={this.props.navigationStatus}>
            <CardsContentText text="Freelance for Method NZ" />
          </GridTile>

          <GridTile hover transition={this.props.navigationStatus}>
            <GridTileTitle text="Webserie:<br/>Na lata" />
          </GridTile>
          <GridTile transition={this.props.navigationStatus}>
            <CardsContentText text="Webserie: Na lata<br/>Slikland" />
          </GridTile>

          <GridTile hover transition={this.props.navigationStatus}>
            <GridTileTitle text="Troller<br/>Bold" />
            {/* <Image
              src={require('./images/trollerbold.png')}
              fluid
            /> */}
          </GridTile>
          <GridTile transition={this.props.navigationStatus}>
            <CardsContentText text="Troller Bold<br/>The Goodfellas" />
          </GridTile>

          <GridTile hover transition={this.props.navigationStatus}>
            <GridTileTitle text="ABCDogs" />
            {/* <Image
              src={require('./images/abcdogs.png')}
              fluid
            /> */}
          </GridTile>
          <GridTile transition={this.props.navigationStatus}>
            <CardsContentText text="ABCDogs<br/>The Goodfellas" />
          </GridTile>

          <GridTile hover transition={this.props.navigationStatus}>
            <GridTileTitle text="Renda Fixa<br/>Web App" />
            {/* <Image
              src={require('./images/renda-fixa.png')}
              fluid
            /> */}
          </GridTile>
          <GridTile transition={this.props.navigationStatus}>
            <CardsContentText text="Web app<br/>Renda Fixa" />
          </GridTile>

          <GridTile hover transition={this.props.navigationStatus}>
            <GridTileTitle text="Goodwill<br>Frames" />
            {/* <Image
              src={require('./images/goodwill-frames.jpg')}
              fluid
            /> */}
          </GridTile>
          <GridTile transition={this.props.navigationStatus}>
            <CardsContentText text="Goodwill Frames<br/>Santa I/O" />
          </GridTile>

          <GridTile hover transition={this.props.navigationStatus}>
            <GridTileTitle text="Portal<br/>Nissin" />
          </GridTile>
          <GridTile transition={this.props.navigationStatus}>
            <CardsContentText text="Portal Nissin<br/>Slikland" />
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
)(ViewWorksContainer);

ViewWorksContainer.propTypes = {};

ViewWorksContainer.defaultProps = {};

