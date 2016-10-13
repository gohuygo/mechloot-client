import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import SubscriptionForm from './components/SubscriptionForm.js';

class App extends Component {
  render() {
    return (
      // Navbar
      <div>
        <Navbar brand='MECHLOOT'/>
        <SubscriptionForm />
      </div>
    );
  }
}

export default App;
