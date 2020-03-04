import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { Homepage } from './Home';
import { About } from './About';
import { Engage } from './Engage';
import { Booking } from './Booking';
import { Signin } from './Signin';

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
                <Route path="/signin" component={ Signin } />
              </div>
            </Router>
            );
    }
}

export default App;
