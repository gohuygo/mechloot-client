import React from 'react';

class Navbar extends React.Component {
  render() {
    return (
      <div className='row'>
        <div className='nav'>
          <div className='nav-container text-center'>
            <p className='brand'>{this.props.brand}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
