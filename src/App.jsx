// region 1. Platform Libraries
import React, { useState } from 'react';
// end-region

// region 2. Project Libraries
import Dictionary from './components/Dictionary';
import Navbar from './components/Navbar';
// end-region

const App = () => {
  const [word, setWord] = useState('');

  return (
    <div className="App min-h-screen text-white bg-indigo-900 opacity-90">
      <Navbar setWord={setWord} />
      <Dictionary word={word} />
    </div>
  );
};

export default App;
