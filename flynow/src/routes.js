import React from 'react';
import { Route } from 'react-router-dom';

import Login from './components/login';
import Home from './components/home';
import Signup from './components/signup';

const BaseRouter = () => (

    <div>
        <Route exact path='/' component={Home} />
        <Route exact path='/login/' component={Login} />
        <Route exact path='/signup/' component={Signup} />
    </div>

)

export default BaseRouter
