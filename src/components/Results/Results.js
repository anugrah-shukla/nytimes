import React from 'react';
import './style.css';
import alt_img from './alt_img.png';

class Results extends React.Component {
    render() {
      return (<div className="div1">
                <p className="text">
                    Search for breaking news from across the world, across the times.
                </p>
                <img src={alt_img} alt="This is an image." className="image"/>
              </div>
      );
    }
}

export default Results;