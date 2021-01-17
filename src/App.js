import React from 'react';
import './App.css';

import Instructions from './layout/Instructions';
import Calculations from './layout/Calculations.js';

function App() {
  return (
    <div className='App'>
      <Instructions />
      <Calculations />
    </div>
  );
}

export default App;
