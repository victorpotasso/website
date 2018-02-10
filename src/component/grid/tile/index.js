import React from 'react';
import PropTypes from 'prop-types';
import { TweenMax, Cubic } from "gsap";

import transitions from './index.transitions';

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

  componentDidMount() {
    TweenMax.fromTo(
      this.content,
      0.5,
      transitions['alpha'].enter.from,
      {
        ...transitions['alpha'].enter.to,
        delay: Math.random(),
      },
    );
  }

  componentWillReceiveProps(nextProps) {
    if (_.has(nextProps, 'transition.leaving')) {
      TweenMax.fromTo(
        this.content,
        0.5,
        transitions['alpha'].leave.from,
        {
          ...transitions['alpha'].leave.to,
          delay: Math.random(),
        },
      );
    }
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
    const defaultStyle = {
      transition: `opacity 5000ms ease-in-out`,
      opacity: 0,
    }

    const transitionStyles = {
      entering: { opacity: 0 },
      entered: { opacity: 1 },
    };

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

GridTile.propTypes = {
  transition: PropTypes.shape({}),
};

GridTile.defaultProps = {
  transition: null,
};

export default GridTile;
