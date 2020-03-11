import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Homepage } from './Home';
import { About } from './About';
import { Engage } from './Engage';
import { Booking } from './Booking';
import { Signin } from './Signin';
import { MemberDataTable } from './datatable';
import { SongDataTable } from './datatable';

import logo from './img/logo-new.png';

import './w3.css';

import { HashRouter as Router, Route, Link } from 'react-router-dom';


import './App.css';
import { NavBar } from './navBar';
import { Footer } from './Footer';

class App extends Component {
    render() {
        return (
          <div>
            <Router>
                <NavBar></NavBar>

                <Route exact path="/" component={ Homepage } />
                <Route path="/about" component={ About } />
                {/* <Route path="/engage" component={ Engage } /> */}
                <Route path="/booking" component={ Booking } />
                <Route path="/signin" component={ Signin } />
                <Route path="/memberdata" component={ MemberDataTable } />
                <Route path="/songdata" component={ SongDataTable } />

            </Router>
            
          </div>
        );
    }
}

export default App;
