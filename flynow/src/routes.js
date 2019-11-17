import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './components/home';
import authentication, {SignUp, SignIn} from './components/authentication';

const BaseRouter = () => (

    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/signin/' component={SignIn} />
        <Route exact path='/signup/' component={SignUp} />
      </Switch>
    </div>

)

export default BaseRouter
