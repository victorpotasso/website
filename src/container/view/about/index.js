import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

import BackgroundSky from './../../../component/background/sky';
import Grid from './../../../component/grid';
import GridTile from './../../../component/grid/tile';
import InternalHeader from './../../../component/internal-header';
import Footer from './../../../component/footer';

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

          <GridTile transition={this.props.navigationStatus} />

          <GridTile transition={this.props.navigationStatus} />

          <GridTile transition={this.props.navigationStatus} />

          <GridTile transition={this.props.navigationStatus} />

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

