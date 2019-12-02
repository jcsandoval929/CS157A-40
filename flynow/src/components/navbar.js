import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { teal } from "@material-ui/core/colors";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import { BrowserRouter as Router, Link, withRouter } from "react-router-dom";

const styles = {
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
};

const theme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: teal
  }
});

class ButtonAppBar extends React.Component {
  render() {
    const { classes } = this.props;
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
                to="/home/"
              >
                Flynow
              </Typography>
              <div>
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
              </div>
            </Toolbar>
          </AppBar>
        </ThemeProvider>
        {this.props.children}
      </div>
    );
  }
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(ButtonAppBar));
