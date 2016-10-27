import React from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import ProductList from './components/ProductList.js';

const App = () => (
  <div>
    <Navbar brand='PIRATE RADIO'/>
    <ProductList />
  </div>
)

export default App;
