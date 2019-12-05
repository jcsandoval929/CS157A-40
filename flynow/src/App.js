import React, { useState } from "react";
import { BrowserRouter as Router, Link, withRouter } from "react-router-dom";
import BaseRouter from "./routes";
//import ButtonAppBar from "./components/navbar";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { teal } from "@material-ui/core/colors";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import Axios from "axios";
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
}));

const theme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: teal
  }
});
function App(props){
  function handleLogout() {
    userHasAuthenticated(false);
    props.history.push("/login");
  }
    const classes = useStyles();
    const [isAuthenticating, setIsAuthenticating] = useState(true);
    const [isAuthenticated, userHasAuthenticated] = useState(false);
          return (
            <div className={classes.root}>
              <ThemeProvider theme={theme}>
                <AppBar position="static" color="primary">
                  <Toolbar>
                    <Typography
                      variant="h6"
                      color="inherit"
                      className={classes.grow}
                      component={Link}
                      to="/"
                    >
                      Flynow
                    </Typography>
                    <div>
                    {isAuthenticated
        ? <Button onClick={handleLogout}>Logout</Button>
        : <>
                      <Button
                        variant="contained"
                        color="primary"
                        component={Link}
                        to="/signup/"
                      >
                        SignUp
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        component={Link}
                        to="/login/"
                      >
                        Login
                      </Button>
                      </>
                    }
                    </div>
                  </Toolbar>
                </AppBar>
              </ThemeProvider>
                <BaseRouter appProps={{ isAuthenticated, userHasAuthenticated }} />
            </div>
          );
}
export default withRouter(App);
