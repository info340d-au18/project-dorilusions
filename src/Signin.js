import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { AdminHome } from './AdminHome';

export class Signin extends Component {
    render() {
        return (
            <div>
                <p> sign in </p>
                <Router>
                    <div> 
                        <Link to="/adminhome">Admin Home</Link>
                        <Route path="/adminhome" component={ AdminHome } />
                    </div>
                </Router>
            </div>
            
        );
    }
}