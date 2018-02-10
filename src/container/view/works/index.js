import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

import BackgroundSky from './../../../component/background/sky';
import Grid from './../../../component/grid';
import GridTile from './../../../component/grid/tile';
import InternalHeader from './../../../component/internal-header';
import Footer from './../../../component/footer';

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

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = (dispatch, ownProps) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewWorksContainer);

ViewWorksContainer.propTypes = {};

ViewWorksContainer.defaultProps = {};

