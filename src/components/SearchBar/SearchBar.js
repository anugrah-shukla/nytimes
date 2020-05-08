import React from 'react';
// import ReactDOM from 'react-dom';

class SearchBar extends React.Component {
    render() {
      return <div style = {{height:'10%',margin:'0 0 0 0'}}>
        
        <form class="example" action="" style={{margin:"auto",padding:"100px 60px 60px 60px"}}>
          <input type="text" placeholder="Search.." name="search2" style={{width:"1000px",height:"150px",marginLeft:'2%',background: "#F8FAFB 0% 0% no-repeat padding-box",paddingLeft:"50px"}}/>
          <button type="submit" style={{font: "Bold 18px/21px Roboto",color: "#FFFFFF",
background: "#4CA2FF 0% 0% no-repeat padding-box",borderRadius:"70px",width:"300px",height:"140px",top:"26px",marginLeft:"3%"}}>Search</button>
        </form>
  
      </div>;
    }
}

export default SearchBar;