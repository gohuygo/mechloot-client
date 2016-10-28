import React from 'react';
import Navbar from './components/Navbar.js';
import ProductList from './components/ProductList.js';
import CssDebugger from './utilities/CssDebugger.js';
import './App.css';
import './styles/CustomPaddings.css'

const App = () => (
  <div>
    <Navbar brand='PIRATE RADIO'/>
    <ProductList />
    <CssDebugger />
  </div>
)

export default App;
