// import React from 'react';
// import { useQuery } from '@apollo/client';

// import { QUERY_PROFILES } from '../utils/queries';


// const Home = ()  => {

// }

// export default Home;

import { Paper, Typography } from '@material-ui/core';
import React from 'react';
// import Image from '';

const styles = {
  paperContainer: {
      backgroundImage: `url(${Image})`
  }
};


export default function Home() {
  return(
    
    <Typography variant="h3" align="center">
      <Paper style={styles.paperContainer}>
              
            </Paper>
      Password Manager Made Simple
    </Typography>
  );
  
}