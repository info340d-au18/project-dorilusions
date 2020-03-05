import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route, Link, useRouteMatch } from "react-router-dom";
import { Homepage } from './Home';
import { About } from './About';
import { Engage } from './Engage';
import { Booking } from './Booking';
import { Signin } from './Signin';
import { AdminHome } from './AdminHome';

function AdminHome(){
  let { path, url } = useRouteMatch();

  return (
    <div>
      <h1>Welcome Back!</h1>
      <Link to={`${url}/memberdata`}>Member Data</Link>

      <Route path={`${path}/`} component={Topic}/>
    </div>
  )
}

class App extends Component {
    render() {
        return (
            <Router>
              <div>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/engage">Engage</Link>
                <Link to="/booking">Booking</Link>
                <Link to="/signin">Sign In</Link>

                <Route exact path="/" component={ Homepage } />
                <Route path="/about" component={ About } />
                <Route path="/engage" component={ Engage } />
                <Route path="/booking" component={ Booking } />
                <Route path="/signin">
                  <Signin/>
                </Route>/>
              </div>
            </Router>
            );
    }
}

export default App;
