// import React from 'react';
// import { useQuery } from '@apollo/client';

// import { QUERY_PROFILES } from '../utils/queries';


// const Home = ()  => {

// }

// export default Home;
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Dashboard from '../components/Dashboard'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Password Manager
          </Typography>
          <Button color="inherit">Login</Button>
          <Button color="inherit">signup</Button>
        </Toolbar>
      </AppBar>

      <Dashboard categories='I do not know' title='title'></Dashboard>
    </div>
  );
}