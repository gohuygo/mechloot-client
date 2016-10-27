import React from 'react';
import Navbar from './components/Navbar.js';
import ProductList from './components/ProductList.js';
import './App.css';

const App = () => (
  <div>
    <Navbar brand='PIRATE RADIO'/>
    <ProductList />
    <span className="visible-xs">SIZE XS</span><span className="visible-sm">SIZE SM</span><span className="visible-md">SIZE MD</span><span className="visible-lg">SIZE LG</span>
  </div>
)

export default App;
