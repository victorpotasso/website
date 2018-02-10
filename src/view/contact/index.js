import React from 'react';
// import PropTypes from 'prop-types';

import ViewContactContainer from './../../container/view/contact';

import './index.css';

class ContactView extends React.Component {
  render() {
    return (
      <div className="ContactView">
        <ViewContactContainer {...this.props} />
      </div>
    )
  }
}

ContactView.propTypes = {};

ContactView.defaultProps = {};

export default ContactView;
