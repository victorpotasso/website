import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import cn from 'classnames'

import './index.css';

class CardsMenu extends React.Component {
  render() {
    const PATHNAME_ABOUT = '/about';
    const PATHNAME_WORKS = '/works';
    const PATHNAME_CONTACT = '/contact';

    console.log('current', this.props.current);
    return (
      <div className={cn('CardsMenu', { 'CardsMenu--inverted': this.props.inverted })}>
        <ul className="CardsMenu__list">
          <li className={cn('CardsMenu__list__item', { 'CardsMenu__list__item--blocked': this.props.current === PATHNAME_ABOUT })}>
            <Link to={PATHNAME_ABOUT}>About</Link>
          </li>
          <li className={cn('CardsMenu__list__item', { 'CardsMenu__list__item--blocked': this.props.current === PATHNAME_WORKS })}>
            <Link to={PATHNAME_WORKS}>Works</Link>
          </li>
          <li className={cn('CardsMenu__list__item', { 'CardsMenu__list__item--blocked': this.props.current === PATHNAME_CONTACT })}>
            <Link to={PATHNAME_CONTACT}>Contact</Link>
          </li>
        </ul>
      </div>
    );
  }
}

CardsMenu.propTypes = {};

CardsMenu.defaultProps = {};

export default CardsMenu;
