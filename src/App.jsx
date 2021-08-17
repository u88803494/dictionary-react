// region 1. Platform Libraries
import React from 'react';
// end-region

// region 2. Project Libraries
import Dictionary from './components/Dictionary';
import Navbar from './components/Navbar';
// end-region

const App = () => (
  <div className="App text-white">
    <Navbar />
    <Dictionary />
  </div>
);

export default App;
