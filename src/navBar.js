import React, { Component } from 'react';

import { Homepage } from './Home';
import { About } from './About';
import { Engage } from './Engage';
import { Booking } from './Booking';
import { Signin } from './Signin';
import { MemberDataTable } from './DataTable';
import { SongDataTable } from './DataTable';

import logo from './img/logo-new.png';

import './w3.css';

import { HashRouter as Router, Route, Link } from 'react-router-dom';



export class NavBar extends Component {
    render() {
        return (
            <Router>
                <nav class="w3-top">
                   <div class="w3-bar w3-card transparentNav">
                        <a class="navLink w3-hide-medium w3-hide-large w3-right" href="javascript:void(0)" onclick="navToggle()"
                            title="Toggle Navigation Menu"><i class="fa fa-bars"></i></a>
                        <Link to="/"><a class="navLink"><img src={logo} class="homeLogo"></img></a></Link>
                        {/* <Link to="/engage"><a class="navLink w3-hide-small">ENGAGE</a></Link> */}
                        <Link to="/booking"><a class="navLink w3-hide-small">BOOKING</a></Link>
                        <Link to="/about"><a class="navLink w3-hide-small">ABOUT</a></Link>
                        <Link to="/memberdata"><a class="navLink w3-hide-small">MEMBERS</a></Link>
                        <Link to="/songdata"><a class="navLink w3-hide-small">SONGS</a></Link>
                        <Link to="/signin"><a class="navLink signIn w3-hide-small">SIGN IN</a></Link>
                    </div>
                </nav>

                <Route exact path="/" component={ Homepage } />
                <Route path="/about" component={ About } />
                {/* <Route path="/engage" component={ Engage } /> */}
                <Route path="/booking" component={ Booking } />
                <Route path="/signin" component={ Signin } />
                <Route path="/memberdata" component={ MemberDataTable } />
                <Route path="/songdata" component={ SongDataTable } />

            </Router>
        )
    }
}