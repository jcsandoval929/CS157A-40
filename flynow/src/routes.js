import React from "react";
import { Route, Switch } from "react-router-dom";
import AppliedRoute from "./components/AppliedRoute";
import Login from "./components/login";
import Home from "./components/home";
import Signup from "./components/signup";
import Dashboard from "./components/dashboard";
import Admin_Dashboard from "./components/admin_dashboard";
import Search from "./components/search";
import Bookings from "./components/bookings";
import Stats from "./components/stats";

export default function Routes({ appProps }) {
  return (
  <Switch>
    <AppliedRoute path="/" exact component={Home} appProps={appProps}/>
    <AppliedRoute path="/login/" exact component={Login} appProps={appProps}/>
    <AppliedRoute path="/signup/" exact component={Signup} appProps={appProps} />
    <AppliedRoute path="/dashboard/" exact component={Dashboard} appProps={appProps} />
    <AppliedRoute path="/admin_dashboard/" exact component={Admin_Dashboard} appProps={appProps} />
    <AppliedRoute path="/search/" exact component={Search} appProps={appProps} />
    <AppliedRoute path="/bookings/" exact component={Bookings} appProps={appProps} />
    <AppliedRoute path="/stats/" exact component={Stats} appProps={appProps} />
  </Switch>
  );
}
