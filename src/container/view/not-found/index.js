import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

import BackgroundSky from './../../../component/background/sky';
import Grid from './../../../component/grid';
import Image from './../../../component/image';
import GridTile from './../../../component/grid/tile';
import InternalHeader from './../../../component/internal-header';
import Footer from './../../../component/footer';

import * as AppSelectors from './../../../data/app/selectors';

import './index.css';

class ViewNotFoundContainer extends React.Component {
  render() {
    return (
      <div className="ViewNotFoundContainer">
        <BackgroundSky />
        <Grid>
          <InternalHeader title="404" transition={this.props.navigationStatus} />

          <GridTile hover transition={this.props.navigationStatus}>
            <p style={{ fontSize: 60 }}>Oops!</p>
          </GridTile>

          <GridTile transition={this.props.navigationStatus}>
            <p style={{ fontSize: 40 }}>{`Page "${this.props.location.pathname.replace('/', '')}"`}</p>
            <p style={{ fontSize: 40 }}>not found</p>
          </GridTile>

          <GridTile transition={this.props.navigationStatus} />

          <GridTile hover transition={this.props.navigationStatus}>
            <Image
              src="http://img2.timeinc.net/people/i/2015/news/150309/parks-rec-6-600.gif"
              fluid
            />
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
)(ViewNotFoundContainer);

ViewNotFoundContainer.propTypes = {};

ViewNotFoundContainer.defaultProps = {};

