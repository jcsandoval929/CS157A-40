import React, { useState, useEffect }  from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import FlightTakeoffIcon from "@material-ui/icons/FlightTakeoff";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import useForm from "react-hook-form";
import Axios from "axios";
import { useHistory } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route, Redirect
} from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        FlyNow
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: "#ffffff"
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
    backgroundColor: "#00bfff"
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));
export default function SignIn(props) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const classes = useStyles();
  const { handleSubmit, register } = useForm();
  const onSubmit = data => {
   Axios.post("http://localhost:5000/database/auth", {email, password}).then(res => {
     console.log(res.data);
     if(res.data.code == 200){
      props.userHasAuthenticated(true);
      props.history.push('/dashboard');
    } else{
      props.history.push('/login');
      alert('Wrong Login Credentials');
    }
   });
 };
//   async function handleSubmit(event) {
//     event.preventDefault();
//     try {
//       await Axios.post("http://localhost:5000/database/auth", {email, password})
//       .then(function (response) {
//     console.log(response);
//   });
//       props.userHasAuthenticated(true);
//       props.history.push("/dashboard");
//     } catch (e) {
//     alert(e.message);
//   }
// }
  // const onSubmit = data => {
  //   console.log(data);
  //   Axios.post("http://localhost:5000/database/auth", data).then(res => {
  //     console.log(res.data);
  //     if(res.data.success){
  //         <Redirect to='/dashboard'/>
  //     }else if(res.data.error){
  //       return false;
  //     }
  //   });
  // };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <FlightTakeoffIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Welcome to FlyNow, Please Sign in
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
          <div className="loginForm">
            <label className="loginFormLabel" htmlFor="email">
              Email
            </label>
            <input
            type = "email"
            id = "email"
            value = {email}
            onChange={e => setEmail(e.target.value)}
            className = "loginFormInput"
            placeholder = "Enter your Email"
            name = "email"
            required
            />
          </div>
          <div className="loginForm">
            <label className="loginFormLabel" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="loginFormInput"
              placeholder="Enter your password"
              name="password"
              value = {password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="loginForm">
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className="submit"
            >
              Sign In
            </Button>
          </div>
          <Grid container>
            <Grid item>
              <Link href="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
