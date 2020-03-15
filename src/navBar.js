import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown'
import logo from './img/logo-new.png';
import './App.css';
import './w3.css';

export class NavBar extends Component {
    render() {
        return (
            
        <nav class="w3-top">
            <div class="w3-bar w3-card transparentNav">
                 <a class="navLink w3-hide-medium w3-hide-large w3-right" href="javascript:void(0)" onclick="navToggle()"
                     title="Toggle Navigation Menu"><i class="fa fa-bars"></i></a>
                 <Link to="/"><a class="navLink"><img src={logo} class="homeLogo"></img></a></Link>
                 <Link to="/engage"><a class="navLink w3-hide-small" style={{color:"white"}}>ENGAGE</a></Link>
                 <Link to="/booking"><a class="navLink w3-hide-small" style={{color:"white"}}>BOOKING</a></Link>
                 <Link to="/about"><a class="navLink w3-hide-small" style={{color:"white"}}>ABOUT</a></Link>
                 {/* <Link to="/memberdata"><a class="navLink w3-hide-small" style={{color:"white"}}>MEMBERS</a></Link>
                 <Link to="/songdata"><a class="navLink w3-hide-small" style={{color:"white"}}>SONGS</a></Link> */}
                 <a class="navLink signIn w3-hide-small" style={{color:"white"}} onClick={this.props.openModal}>SIGN IN</a>
             </div>
         </nav>
           
        )
    }
}

export class NavBarMember extends Component {
    render() {
        return (
            
        <nav class="w3-top" style={{zIndex:10000}}>
            <div class="w3-bar w3-card transparentNav">

                <a class="navLink w3-hide-medium w3-hide-large w3-right" href="javascript:void(0)" onclick="navToggle()"
                    title="Toggle Navigation Menu"><i class="fa fa-bars"></i></a>
                <Link to="/"><a class="navLink"><img src={logo} class="homeLogo"></img></a></Link>
                <Link to="/engage"><a class="navLink w3-hide-small" style={{color:"white"}}>ENGAGE</a></Link>
                <Link to="/booking"><a class="navLink w3-hide-small" style={{color:"white"}}>BOOKING</a></Link>
                <Link to="/about"><a class="navLink w3-hide-small" style={{color:"white"}}>ABOUT</a></Link>
                <Link to="/memberdata"><a class="navLink w3-hide-small" style={{color:"white"}}>MEMBERS</a></Link>
                <Link to="/songdata"><a class="navLink w3-hide-small" style={{color:"white"}}>SONGS</a></Link>
                {/* <a class="navLink signIn w3-hide-small" style={{color:"white"}} onClick={this.props.signout}>SIGN OUT</a> */}
            </div>
        </nav>
           
        )
    }
}