import React from 'react';
// import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
// import Grid from '@material-ui/core/Grid';
import Box from  '@material-ui/core/Box';
// import Link from '@material-ui/core/link';


const footer = {
  position: 'sticky',
  bottom: "0",
  backgroundColor: '#3F51B5',
  margin: "0 auto",
  
  
}



export default function Footer() {
    return <footer style={footer}>
      <Box mt={8}>
      <Typography variant="body2" color="textSecondary" align="center" >
      {'Copyright © Amigos       '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
    </Box>
    </footer>;
}