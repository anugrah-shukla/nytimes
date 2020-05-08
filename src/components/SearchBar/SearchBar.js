import React from 'react';
import './style.css';

class SearchBar extends React.Component {
    render() {
      return (
      <div>
        
        <form>
          <input type="text"  className="bar" placeholder="Search.." />
          <button type="submit" className="button">Search</button>
        </form>
  
      </div>
      );
    }
}

export default SearchBar;