import './App.css';
import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Shop from './Shop'
import Error from './Error'
import Navbar from './Navbar'



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route path="/" component={Home} exact/>    
        <Route path="/about" component={About} exact/>    
        <Route path="/shop" component={Shop} exact/>    
        <Route component={Error}/>
      </Switch>
    </div>
  );
}

export default App;
