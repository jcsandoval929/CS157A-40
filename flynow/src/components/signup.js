import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import useForm from "react-hook-form";
import Axios from 'axios';

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const theme = createMuiTheme({
  palette: {
    //primary: teal
  }
});
export default function SignUp() {
  const classes = useStyles();
  const { handleSubmit, register } = useForm({
    defaultValues: {
    firstName: "",
    lastName: "",
    email: "",
    password: ""
    }
  });
  const onSubmit = (data) =>  {
    console.log(data)
    Axios.post('http://localhost:5000/database/register', data)
      .then(res => console.log(res.data));
  }
  return (
    <React.Fragment>
      <CssBaseline />
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form className={classes.form} onSubmit = {handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
              <div className = "SignupForm">
                <label className = "SignupFormLabel" htmlFor="firstName">First Name</label>
                <input
                type = "firstName"
                id = "firstName"
                ref = {register({
                        required: true
                })}
                className = "SignupFormInput"
                placeholder = "Enter your First Name"
                name = "firstName"
                required
                />
              </div>
              </Grid>
              <Grid item xs={12} sm={6}>
              <div className = "SignupForm">
                <label className = "SignupFormLabel" htmlFor="lastName">Last Name</label>
                <input
                type = "lastName"
                id = "lastName"
                ref = {register({
                        required: true
                })}
                className = "SignupFormInput"
                placeholder = "Enter your Last Name"
                name = "lastName"
                required
                />
              </div>
              </Grid>
              <Grid item xs={12}>
              <div className = "SignupForm">
                <label className = "SignupFormLabel" htmlFor="email">Email</label>
                <input
                type = "email"
                id = "email"
                ref = {register({
                        required: true
                })}
                className = "SignupFormInput"
                placeholder = "Enter your Email"
                name = "email"
                required
                />
              </div>
              </Grid>
              <Grid item xs={12}>
              <div className = "SignupForm">
                <label className = "SignupFormLabel" htmlFor="password">Password</label>
                <input
                type = "password"
                id = "password"
                ref = {register({
                        required: true
                })}
                className = "SignupFormInput"
                placeholder = "Enter your Password"
                name = "password"
                required
                />
              </div>
              </Grid>
            </Grid>
            <ThemeProvider theme={theme}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign Up
              </Button>
            </ThemeProvider>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="/login/" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </React.Fragment>
  );
}
