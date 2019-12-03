import React from 'react';
import { Route } from 'react-router-dom';

import Login from './components/login';
import Home from './components/home';
import Signup from './components/signup';
import Dashboard from './components/dashboard';
import Bookings from './components/bookings';

const BaseRouter = () => (

    <div>
        <Route exact path='/' component={Home} />
        <Route exact path='/login/' component={Login} />
        <Route exact path='/signup/' component={Signup} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/bookings" component={Bookings} />
    </div>

)

export default BaseRouter
