import React from 'react';
// import PropTypes from 'prop-types';

import './index.css';

class Grid extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tileWidth: window.innerWidth / this.props.cols,
    }

    this.onResize = this.onResize.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.onResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize)
  }

  onResize() {
    this.setState({
      tileWidth: window.innerWidth / this.props.cols,
    });
  }

  render() {
    return (
      <div className="Grid">
        {this.props.children}
      </div>
    );
  }
}

Grid.propTypes = {};

Grid.defaultProps = {};

export default Grid;
