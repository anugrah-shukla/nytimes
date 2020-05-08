import React from 'react';
import NavigationPane from './layout/NavigationPane';
import SearchBarPane from './layout/SearchPane';
import ResultGraphPane from './layout/ResultGraphPane';
import ResultTablePane from './layout/ResultTablePane';

import './App.css';

function App() {
  return (
    <div style={{width:window.innerWidth,
      height:window.innerHeight,
      background: "#F6F8F8 0% 0% no-repeat padding-box",
      border: "1px solid #DEDEDE",
      opacity: 1
      }}>
        <NavigationPane/>
        <div style={{
            height: "100%",
            width: "80%",
            position: "fixed",
            right: "0",
            backgroundColor: "#DEDEDE"
          }}>
          <SearchBarPane/>
          <ResultTablePane/>
          <ResultGraphPane/>
        </div>
    </div>
  );
}

export default App;
