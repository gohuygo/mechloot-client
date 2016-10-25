import React from 'react';

class Navbar extends React.Component {
  render() {
    return (
      <div className='row'>
        <div className='nav'>
          <div className='nav-container'>
            <span className='brand'>{this.props.brand}</span>
            <span className='subscribe-button'>SUBSCRIBE</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
