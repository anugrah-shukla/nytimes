import React from 'react';
import Navigation from './components/Navigation';
import SearchBar from './components/SearchBar';
import Results from './components/Results';

import './App.css';

function App() {
  return (
    <div className="main">
        <div className="left"><Navigation/></div>
        <div className="right">
          <div className="top"><SearchBar/></div>
          <div className="bottom"><Results/></div>
        </div>
    </div>
  );
}

export default App;
