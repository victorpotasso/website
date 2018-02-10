import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import cn from 'classnames';

import * as AppActions from './../../../data/app/actions';

import './index.css';

class CardsMenuContainer extends React.Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(pathname) {
    this.props.navigateTo(pathname);
    if (this.props.onClick) this.props.onClick(pathname);
  }

  render() {
    const PATHNAME_ABOUT = '/about';
    const PATHNAME_WORKS = '/works';
    const PATHNAME_CONTACT = '/contact';

    return (
      <div className={cn('CardsMenuContainer', { 'CardsMenuContainer--inverted': this.props.inverted })}>
        <ul className="CardsMenuContainer__list">
          <li className={cn('CardsMenuContainer__list__item', { 'CardsMenuContainer__list__item--blocked': this.props.current === PATHNAME_ABOUT })}>
            <a onClick={() => this.onClick(PATHNAME_ABOUT)}>About</a>
          </li>
          <li className={cn('CardsMenuContainer__list__item', { 'CardsMenuContainer__list__item--blocked': this.props.current === PATHNAME_WORKS })}>
            <a onClick={() => this.onClick(PATHNAME_WORKS)}>Works</a>
          </li>
          <li className={cn('CardsMenuContainer__list__item', { 'CardsMenuContainer__list__item--blocked': this.props.current === PATHNAME_CONTACT })}>
            <a onClick={() => this.onClick(PATHNAME_CONTACT)}>Contact</a>
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  navigateTo: (pathname) => dispatch(AppActions.navigateTo(pathname)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardsMenuContainer);

CardsMenuContainer.propTypes = {};

CardsMenuContainer.defaultProps = {};

