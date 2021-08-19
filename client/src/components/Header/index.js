import React from 'react';
import { Link } from 'react-router-dom';


const header = {
    backgroundColor: '#3F51B5',
    borderRadius: "10px 10px 10px 10px"
}

const title = {
    display: "flex",
    justifyContent: "center",
    color: "white",
    // backgroundColor: "#3F51B5",
    // padding: "30px",
    fontFamily: "Arial",
    // border: "1px grey solid", 
  
  };

  const divBtn = {
    display: 'flex',
    justifyContent: 'center'
  }

  const btn = {
    backgroundColor: "#3F51B5",
    margin: '3rem',
    borderRadius: "10px 10px 10px 10px"
  }

  const linkBtn = { 
      color: 'white',
      fontSize: '30px',
      textDecoration: 'none',
  }

  const Header = ()  => {
      return (
          <header style={header}> 
              <h1 style={title}>Password Manager</h1>
              <div  style={divBtn}>
                    <button style={btn}>
                      <Link style={linkBtn} to='/login'>Login</Link> 
                    </button>
                    <button style={btn}>
                      <Link style={linkBtn} to='/signup'>Signup</Link> 
                    </button>
              </div>
          </header>
      )

  }


  export default Header


