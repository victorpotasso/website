import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/fontawesome-free-solid';
import cn from 'classnames';

import CardsMenu from './../cards/menu';

import './index.css';

class NavMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpened: false,
    }

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({ isOpened: !this.state.isOpened });
  }

  render() {
    return (
      <div className={cn('NavMenu', { 'NavMenu--isOpened': this.state.isOpened })}>
        {this.state.isOpened &&
          <CardsMenu inverted current={this.props.current} />
        }
        <FontAwesomeIcon
          className="NavMenu__toggleBtn"
          icon={faBars}
          size="2x"
          onClick={this.onClick}
        />
      </div>
    );
  }
}

NavMenu.propTypes = {};

NavMenu.defaultProps = {};

export default NavMenu;
