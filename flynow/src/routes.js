import React from "react";
import { Route } from "react-router-dom";

import Login from "./components/login";
import Home from "./components/home";
import Signup from "./components/signup";
import Dashboard from "./components/dashboard";
import Admin_Dashboard from "./components/admin_dashboard";
import Search from "./components/search";
import Bookings from "./components/bookings";
import Stats from "./components/stats";

const BaseRouter = () => (
  <div>
    <Route exact path="/" component={Home} />
    <Route exact path="/login/" component={Login} />
    <Route exact path="/signup/" component={Signup} />
    <Route exact path="/dashboard/" component={Dashboard} />
    <Route exact path="/admin_dashboard/" component={Admin_Dashboard} />
    <Route exact path="/search/" component={Search} />
    <Route exact path="/bookings/" component={bookings} />
    <Route exact path="/stats/" component={Stats} />
  </div>
);

export default BaseRouter;
