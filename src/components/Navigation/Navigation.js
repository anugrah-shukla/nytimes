import React from 'react';
import './style.css';
import nytimes_logo from './nytimes_logo.png';

class Navigation extends React.Component {
    render() {
      return (
      <div>
        <div className="logo">
          <img src={nytimes_logo} alt="This is an image."/>
        </div>
        <div className="list">
          <p>Dashboard</p>
          <p>Articles</p>
          <p>Analytics</p>
          <p>Messages</p>
          <p>Calendar</p>
        </div>
      </div>
      );
    }
}

export default Navigation;