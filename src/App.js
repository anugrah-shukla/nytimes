import React from 'react';
import Navigation from './components/Navigation';
import SearchBar from './components/SearchBar';
// import Graph from './components/Graph';
// import Results from './components/Results';

import './App.css';

function App() {
  return (
    <div style={{width:window.innerWidth,
      height:window.innerHeight,
      background: "#F6F8F8 0% 0% no-repeat padding-box",
      border: "1px solid #DEDEDE",
      opacity: 1
      }}>
        <Navigation/>
        <div style={{
            height: "100%",
            width: "80%",
            position: "fixed",
            right: "0",
            backgroundColor: "#DEDEDE"
          }}>
          <SearchBar/>
          <div style = {{height:'45%',backgroundColor: "#33558B"}}>1</div>
          <div style = {{height:'45%',backgroundColor: "#7B8C92"}}>1</div>
        </div>
    </div>
  );
}

export default App;
