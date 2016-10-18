import React from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import SubscriptionBanner from './components/SubscriptionBanner.js';

const App = () => (
  <div>
    <Navbar brand='MECHLOOT'/>
    <SubscriptionBanner />
  </div>
)

export default App;
