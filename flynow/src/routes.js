import React from 'react';
import { Route } from 'react-router-dom';

import Login from './components/login';
import Home from './components/home';

const BaseRouter = () => (

    <div>
        <Route exact path='/' component={Home} />
        <Route exact path='/login/' component={Login} />
    </div>

)

export default BaseRouter
