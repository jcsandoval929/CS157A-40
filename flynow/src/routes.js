import React from 'react';
import {Route} from 'react-router-dom';
import Login from './components/login';



const BaseRouter = () => (

<div>

   <Route exact path = '/login/' component = {Login}/>
   
     
</div>

)

export default BaseRouter
