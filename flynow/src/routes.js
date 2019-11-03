import React from 'react';
import { Route } from 'react-router-dom';

import Home from './components/home';
import authentication, {SignUp, SignIn} from './components/authentication';

const BaseRouter = () => (

    <div>
        <Route exact path='/' component={Home} />
        <Route exact path='/login/' component={SignIn} />
        <Route exact path='/signup/' component={SignUp} />
    </div>

)

export default BaseRouter
