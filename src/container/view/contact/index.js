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

class ViewContactContainer extends React.Component {
  render() {
    return (
      <div className="ViewContactContainer">
        <BackgroundSky />
        <Grid>
          <InternalHeader
            title="Contact"
            current={this.props.location.pathname}
            transition={this.props.navigationStatus}
          />

          <GridTile transition={this.props.navigationStatus}>
            <CardsContentTitle text="Where I live?" />
          </GridTile>
          <GridTile transition={this.props.navigationStatus}>
            <CardsContentText text="Auckland, New Zealand" />
          </GridTile>

          <GridTile />

          <GridTile />

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
)(ViewContactContainer);

ViewContactContainer.propTypes = {};

ViewContactContainer.defaultProps = {};

