import React from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import ApiList from './components/ApiList.js';

const App = () => (
  <div>
    <Navbar brand='Boardgame Beast'/>
    <ApiList />
  </div>
)

export default App;
