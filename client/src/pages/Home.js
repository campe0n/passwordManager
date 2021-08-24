// import React from 'react';
// import { useQuery } from '@apollo/client';

// import { QUERY_PROFILES } from '../utils/queries';

// const Home = ()  => {

// }

// export default Home;

import { Typography } from "@material-ui/core";
import React from "react";
import Image from "../assets/images/lock.png";


const imageStyle = {
width: "300px",
height: "346px",
align: "center"
};
 const divStyle = { 
display: "flex",
flexDirection: "column",
justifyContent: "center",
alignItems: "center"
};

export default function Home() {
  return (
    <div style={divStyle}>
      <Typography variant="h3" align="center">
        Password Manager Made Simple
      </Typography>
      <img src={Image} alt="lock icon" style={imageStyle}/>
    </div>
  );
}
