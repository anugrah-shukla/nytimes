import React from 'react';
import './style.css';

class Navigation extends React.Component {
    render() {
      return (
      <div>
        <div className="logo">
          <img src="..\public\nytimes_logo.png" alt="This is an image."/>
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