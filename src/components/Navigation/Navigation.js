import React from 'react';
// import ReactDOM from 'react-dom';

class Navigation extends React.Component {
    render() {
      return (
      <div>
        <div style={{
                height: "100%",
                width: "20%",
                position: "fixed",
                left: "0"
              }} >
              <img src="..\public\nytimes_logo.png" />
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