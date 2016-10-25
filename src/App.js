import React from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import SubscriptionBanner from './components/SubscriptionBanner.js';
import ApiList from './components/ApiList.js';

const App = () => (
  <div>
    <Navbar brand='APIWOLF'/>
    <SubscriptionBanner />
    <ApiList />
  </div>
)

export default App;
