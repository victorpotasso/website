import React from 'react';
// import PropTypes from 'prop-types';
import { TweenMax } from "gsap";

import './index.css';

class GridTile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      shouldMove: false,
    }

    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseOutComplete = this.onMouseOutComplete.bind(this);
  }

  onMouseOver() {
    this.setState({ shouldMove: true });
  }

  onMouseOut() {
    this.setState({ shouldMove: false });

    TweenMax.to(this.content, 0.5, {
      rotationX: 0,
      rotationY: 0,
      z: 0,
      ease: Cubic.easeOut,
      onComplete: this.onMouseOutComplete,
    });
  }

  onMouseOutComplete() {
    TweenMax.killTweensOf(this.content);
  }

  onMouseMove(event) {
    const mx = event.clientX - this.wrapper.offsetLeft;
    const my = event.clientY - (this.wrapper.offsetTop - window.scrollY);
    const px = (mx - this.wrapper.clientWidth / 2) / (this.wrapper.clientWidth / 2);
    const py = (my - this.wrapper.clientHeight / 2) / (this.wrapper.clientHeight / 2);
    const angle = 20;

    TweenMax.to(this.content, 0.5, {
      rotationX: py * angle,
      rotationY: px * -angle,
      z: -100,
      ease: Cubic.easeOut
    });
  }

  render() {
    return (
      <div
        className="GridTile"
        ref={(ref) => { this.wrapper = ref; }}
        onMouseOver={this.props.hover ? this.onMouseOver : null}
        onMouseOut={this.props.hover ? this.onMouseOut : null}
        onMouseMove={this.state.shouldMove ? this.onMouseMove : null}
        style={{
          width: this.props.width,
          height: this.props.width,
        }}
      >
        <div
          className="GridTile__content"
          ref={(ref) => { this.content = ref; }}
        >
          {this.props.children}
        </div>
      </div>
    );
  }
}

GridTile.propTypes = {};

GridTile.defaultProps = {};

export default GridTile;
