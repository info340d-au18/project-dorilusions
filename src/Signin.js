import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { AdminHome } from './AdminHome';
import './w3.css';
import './App.css';

export class Signin extends Component {
    render() {
        return(
            <div class="w3-container w3-content w3-center w3-padding-64 page-content top-margin" id="intro">
                <h2 class="w3-wide">Sign In</h2>
                <section class="signin-form">
                    <label for="uname" class="w3-left"><b>Username</b></label>
                    <input class="w3-round-large" type="text" placeholder="Enter Username" name="uname" size="10" required />
                    <label for="psw" class="w3-left"><b>Password</b></label>
                    <input class="w3-round-large" type="password" placeholder="Enter Password" name="psw" required />
                    <a href="adminhome.html"><button class="basicButton" type="submit">Login</button></a>
                </section>
            </div> 
        );
    }
}