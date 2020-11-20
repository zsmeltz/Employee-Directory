import React from "react";

function Header() {
  return (
    <div className="jumbotron jumbotron-fluid" style={{backgroundColor: "#191970", color: "white"}}>
    <div className="container">
      <h1 className="display-4" style={{textAlign: 'center', fontWeight: "bold"}}>Employee Directory</h1>
      <hr style={{backgroundColor: 'white'}}></hr>
      <p className="lead" style={{textAlign: 'center'}}>Search for an employee below!</p>
    </div>
  </div>
  );
}

export default Header;