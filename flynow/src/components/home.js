import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { BrowserRouter as Router, withRouter } from 'react-router-dom'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { teal } from '@material-ui/core/colors';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
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


const theme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: teal
  },
});

export default function NavBar(){
  const classes = useStyles()

  return(
    <div className = {classes.root}>
    <ThemeProvider theme = {theme}>
      <AppBar position = "static" color = "primary">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            FlyNow
          </Typography>
            <div>
            <Button
              variant="contained"
              color="primary"
              component={withRouter(Link)}
              to="/signup/"
            >
            SignUp
            </Button>
            <Button
              variant="contained"
              color="primary"
              component={withRouter(Link)}
              to="/signin/"
            >
            Login
            </Button>
            </div>
        </Toolbar>
      </AppBar>
      </ThemeProvider>
      </div>
  );
}
