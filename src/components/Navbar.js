import React from 'react';
import AuthButton from './AuthButton.js';
import { Link } from 'react-router'

class Navbar extends React.Component {
  render() {
    return (
      <div className='row'>
        <div className='nav-container'>
          <Link to='/'>
            <span className='brand'>{this.props.brand}</span>
          </Link>
          <AuthButton/>
        </div>
      </div>
    );
  }
}

export default Navbar
