import React, { Component } from 'react';

import { Homepage } from './Home';
import { About } from './About';
import { Engage } from './Engage';
import { Booking } from './Booking';
import { Signin } from './Signin';

import logo from './img/logo-new.png';

import { HashRouter as Router, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


export class NavBar extends Component {
    render() {
        return (
            <Router>
                <nav class="w3-top">
                   <div class="w3-bar w3-card transparentNav">
                        <a class="navLink w3-hide-medium w3-hide-large w3-right" href="javascript:void(0)" onclick="navToggle()"
                            title="Toggle Navigation Menu"><i class="fa fa-bars"></i></a>
                        <Link to="/"><a class="navLink"><img src={logo} class="homeLogo"></img></a></Link>
                        <Link to="/engage"><a class="navLink w3-hide-small">ENGAGE</a></Link>
                        <Link to="/booking"><a class="navLink w3-hide-small">BOOKING</a></Link>
                        <Link to="/about"><a class="navLink w3-hide-small">ABOUT</a></Link>
                        <Link to="/signin"><a class="navLink signIn w3-hide-small">SIGN IN</a></Link>
                    </div>
                </nav>

                <Route exact path="/" component={ Homepage } />
                <Route path="/about" component={ About } />
                <Route path="/engage" component={ Engage } />
                <Route path="/booking" component={ Booking } />
                <Route path="/signin" component={ Signin } />

            </Router>
        )
    }
}