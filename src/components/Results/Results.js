import React from 'react';
import './style.css';

class Results extends React.Component {
    render() {
      return (<div>
          <div className="text">
              Search for breaking news from across the world, across the times.
          </div>
          <div className="image">
              <img src="..\public\undraw_treasure_of9i.svg" alt="This is an image."/>
          </div>
          </div>
      );
    }
}

export default Results;