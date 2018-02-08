import React from 'react';
// import PropTypes from 'prop-types';

import './index.css';

class BackgroundSky extends React.Component {
  constructor(props) {
    super(props);

    this.pulse = this.pulse.bind(this);
    this.draw = this.draw.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
  }

  componentDidMount() {
    window.addEventListener('mousemove', this.onMouseMove);
    this.lastMousePosition = { clientX: 0, clientY: 0 };
    this.ctx = this.canvas.getContext('2d');
    this.create();

    if (this.props.pulse) this.pulse();
    else this.draw();
  }

  componentWillUnmount() {
    window.removeEventListener('mousemove', this.onMouseMove);
  }

  onMouseMove({ clientX, clientY }) {
    const directionX = clientX > this.lastMousePosition.clientX ? 1 : -1;
    const directionY = clientY > this.lastMousePosition.clientY ? 1 : -1;

    this.stars = _.map(this.stars, (star, i) => {
      const distance = this.distance([clientX, clientY], [star.randomX, star.randomY]);
      const forceDirection = {
        x: (clientX / distance) * directionX,
        y: (clientY / distance) * directionY,
      };

      const maxDistance = window.screen.availWidth * 0.1;
      let force = (maxDistance - distance) / maxDistance;
      if (force < 0) force = 0;

      const timeElapsedSinceLastFrame = 60;
      const randomX = distance > maxDistance ? this.starsOriginal[i].randomX : star.randomX + (forceDirection.x * force * timeElapsedSinceLastFrame);
      const randomY = distance > maxDistance ? this.starsOriginal[i].randomY : star.randomY + (forceDirection.y * force * timeElapsedSinceLastFrame);

      return {
        ...star,
        randomX,
        randomY,
      }
    });

    this.lastMousePosition = { clientX, clientY };
  }

  create() {
    const xMax = this.canvas.width = window.screen.availWidth;
    const yMax = this.canvas.height = window.screen.availHeight;
    const hmTimes = Math.round(xMax + yMax);

    this.stars = Array(hmTimes);

    for (let i = 0; i <= hmTimes; i += 1) {
      this.stars[i] = {
        randomX: Math.floor((Math.random() * xMax) + 1),
        randomY: Math.floor((Math.random() * yMax) + 1),
        randomSize: Math.floor((Math.random() * 2) + 1),
        randomOpacityOne: Math.floor((Math.random() * 9) + 1),
        randomOpacityTwo: Math.floor((Math.random() * 9) + 1),
        randomHue: Math.floor((Math.random() * 360) + 1),
      };
    }

    this.starsOriginal = Object.assign([], this.stars);
  }

  update() {
    this.stars = _.map(this.stars, star => ({
      ...star,
      randomSize: Math.floor((Math.random() * 2) + 1),
    }));
  }

  draw() {    
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (var i = 0; i < this.stars.length; i++) {
      const {
        randomX,
        randomY,
        randomSize,
        randomOpacityOne,
        randomOpacityTwo,
        randomHue,
      } = this.stars[i];

      if (randomSize > 1) {
        this.ctx.shadowBlur = Math.floor((Math.random() * 15) + 5);
        this.ctx.shadowColor = "#FFFFFF";
      }
      this.ctx.fillStyle = "hsla(" + randomHue + ", 30%, 80%, ." + randomOpacityOne + randomOpacityTwo + ")";
      this.ctx.fillRect(randomX, randomY, randomSize, randomSize);
    }
  }

  pulse() {
    this.update();
    this.draw();
    requestAnimationFrame(this.pulse);
  }

  distance(dot1, dot2) {
    const x1 = dot1[0];
    const y1 = dot1[1];
    const x2 = dot2[0];
    const y2 = dot2[1];
    return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
  }

  render() {
    return (
      <canvas
        className="BackgroundSky"
        ref={(ref) => { this.canvas = ref; }}
      >
      </canvas>);
  }
}

BackgroundSky.propTypes = {};

BackgroundSky.defaultProps = {};

export default BackgroundSky;
