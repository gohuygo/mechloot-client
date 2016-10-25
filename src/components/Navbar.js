import React from 'react';
import SubscriptionButton from './SubscriptionButton.js';

class Navbar extends React.Component {
  render() {
    return (
      <div className='row'>
        <div className='nav-container'>
          <span className='brand'>{this.props.brand}</span>
          <SubscriptionButton />
        </div>
      </div>
    );
  }
}

export default Navbar;
