import React from 'react';
import './App.css';

import Instructions from './layout/Instructions';
import Calculations from './layout/Calculations.js';
// import AngleCalculations from './layout/AngleCalculations.js';

function App() {
  return (
    <div className='App'>
      <Instructions />
      <Calculations />
      {/* <AngleCalculations /> */}
    </div>
  );
}

export default App;
