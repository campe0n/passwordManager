import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";

// import { ADD_SKILL } from '../../utils/mutations';

import Auth from "../utils/auth";

const formDiv = {
    backgroundColor: '#3F51B5',
    borderRadius: "100px 100px 100px 100px",
    paddingBottom: "80px"
}

const Form = {
    display: "flex",
    justifyContent: "space-evenly",
    // flexDirection: 'row'
}

const inputField = {
    backgroundColor: '#eeeee4',
    color: "white",
    padding: '10px',
    width: '200px',
    borderRadius: "10px 10px 10px 10px",
}

const btn = {
    backgroundColor: '#03fcad',
    // padding: '10px',
    // margin: '5px',
    width: '100px',
    borderRadius: "10px 10px 10px 10px",
}
 
const Header = {
    display: "flex",
    justifyContent: "center",
    color: "white",
    fontSize: '30px',
    paddingTop: "20px"
}
const DeleteBtn = {
    backgroundColor: '#eeeee4',
    padding: '10px',
    width: '150px',
    borderRadius: "10px 10px 10px 10px",
    backgroundColor: '#fc2803',
    marginTop: '20px'
}

const Color = {
    color: "#eeeee4",
    fontSize: '20px'
}

const dashDiv = {
  display: "flex",
  justifyContent: 'center',
  marginTop: '3rem',
}

const dashBtn = {
  backgroundColor: '#03fcad',
  width: '150px',
  borderRadius: "10px 10px 10px 10px",
  margin: '20px',
  padding: '20px',
  fontSize: '20px'

}

const CreatePassword = () => {
  return (
    <div style={formDiv}>
      <h4 style ={Header}>Create Password</h4>
      {/* {Auth.loggedIn() ? ( */}
      <form  style={Form}>
        <div style={Color}>
        website:
          <input style={inputField} type="website" placeholder="website"/> 
          </div>
        <div style={Color}>
        Create Password:
          <input style={inputField} type="password" placeholder="password"/>
          </div>
          <button style={btn} type="submit">Submit</button>


        
        {/* <div>
          <button style={DeleteBtn} >Delete</button>
        </div> */}

        {/* {error && (
            <div >
              {error.message}
            </div>
          )} */}
      </form>

      <div style={dashDiv}>
          <button style={dashBtn}><Link style={{ color: "Black",}} to='dashboard'>Dashboard</Link></button>
        </div>
      {/* //   ) : ( */}
      {" "}
      <p>
         {/* You need to be logged in to create a password. Please //{" "} */}
        {/* <Link to="/login">login</Link> or <Link to="/signup">signup.</Link> */}
        {" "}
      </p>
      {/* //   )} */}
    </div>
  );
};

export default CreatePassword;
