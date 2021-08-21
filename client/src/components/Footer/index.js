import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from  '@material-ui/core/Box';
import Link from '@material-ui/core/link';


const footer = {
  backgroundColor: '#3F51B5',
  borderRadius: "10px 10px 10px 10px"
}



export default function Footer() {
    return <footer style={footer}>
      <Box mt={8}>
      <Typography variant="body2" color="textSecondary" align="center" >
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Amigos
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
    </Box>
    </footer>;
}