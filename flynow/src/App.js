<<<<<<< HEAD
import React, {Component} from 'react';
import {BrowserRouter as Router } from 'react-router-dom'
import BaseRouter from "./routes"

class App extends Component{

  render(){
  return(
  
      <div>
        <Router>
          
          <BaseRouter/>
          
        </Router>
       
      </div>
      ); 
  }
  
=======
import React, {useState, useEffect} from 'react';
function App(){
  const[apiResponse, setApiResponse] = useState('');
  // const App = (props) => {
  //   this.state = { apiResponse: ""};
  // }
  const callIndex = () => {
    fetch("http://localhost:8000/database")
    .then(res => res.text())
    .then(res => setApiResponse(res))
    .catch(err => err);
  }
  useEffect(() => callIndex(),[]);
  // const UNSAFE_componentWillMount = () => {
  //   this.callIndex();
  // }
  return (
    <div className = "App">
    <header className = "Header">
    <h1 className = "Title">Welcome to FlyNow</h1>
    {' '}
    <h4 className = "DatabaseTitle"> MySQL Database</h4>
    </header>
    <p className = "Database">{apiResponse}</p>
    </div>
  );
>>>>>>> nithil
}

export default App;
