import React from 'react';


const header = {
    display: "flex",
    justifyContent: "center",
    color: "white",
    backgroundColor: "#3F51B5",
    padding: "30px",
    fontFamily: "Arial",
    border: "1px grey solid", 
    borderRadius: "10px 10px 10px 10px"
  };

  const Header = ()  => {
      return (
          <header> 
              <h1 style={header}>Password Manager</h1>

          </header>
      )

  }


  export default Header


