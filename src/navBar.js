import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown'
import logo from './img/logo-new.png';

import './w3.css';
import './App.css';

export class NavBar extends Component {
    render() {
        return (  
            <nav class="w3-top">
            <div class="w3-card navPar">
                 <a class="navLink w3-hide-medium w3-hide-large w3-right" href="javascript:void(0)" onclick="navToggle()"
                     title="Toggle Navigation Menu"><i class="fa fa-bars"></i></a>
                 <Link to="/"><a class="navLink"><img src={logo} class="homeLogo"></img></a></Link>
                 <Link to="/engage" class="navLink w3-hide-small"><a>ENGAGE</a></Link>
                 <Link to="/booking" class="navLink w3-hide-small"><a>BOOKING</a></Link>
                 <Link to="/about" class="navLink w3-hide-small"><a>ABOUT</a></Link>
                 
                <div class="leftMenu">
                    <button class="navLink signIn w3-hide-small"><a onClick={this.props.openModal}>SIGN IN</a></button>                  
                </div>  
            </div>
         </nav>            
        )
    }
}

export class NavBarMember extends Component {
    constructor() {
        super();
        
        this.state = {
          showMenu: false,
        };
        
        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }
      
    showMenu(event) {
        event.preventDefault();
        
        this.setState({ showMenu: true }, () => {
          document.addEventListener('click', this.closeMenu);
        });
    }
      
    closeMenu(event) {
        
        if (!this.dropdownMenu.contains(event.target)) {
          
          this.setState({ showMenu: false }, () => {
            document.removeEventListener('click', this.closeMenu);
          });  
          
        }
    }

    render() {
        return (
            
        <nav class="w3-top">
            <div class="w3-card navPar">
                 <a class="navLink w3-hide-medium w3-hide-large w3-right" href="javascript:void(0)" onclick="navToggle()"
                     title="Toggle Navigation Menu"><i class="fa fa-bars"></i></a>
                 <Link to="/"><a class="navLink"><img src={logo} class="homeLogo"></img></a></Link>
                 <Link to="/engage" class="navLink w3-hide-small"><a>ENGAGE</a></Link>
                 <Link to="/booking" class="navLink w3-hide-small"><a>BOOKING</a></Link>
                 <Link to="/about" class="navLink w3-hide-small"><a>ABOUT</a></Link>
                 
                {/* dropdown menu */}
                <div class="leftMenu">
                    <div class="dropParent">
                       <button class="navLink signIn" onClick={this.showMenu} > PROFILE </button>

                        {
                        this.state.showMenu
                            ? (
                            <div class="dropdown" ref={(element) => {this.dropdownMenu = element;}}>
                                <Link to="/request" class="navLink"><a>FAVORITES</a></Link>
                                <Link to="/performances" class="navLink"><a>REQUESTS</a></Link>
                            </div>
                            )
                            : (
                            null
                            )
                        } 
                    </div>

                    <button class="navLink signIn w3-hide-small"><a onClick={this.props.signout}>SIGN OUT</a></button>
                    
                </div>  
            </div>
         </nav>       
        )
    }
}

export class NavBarAdmin extends Component {
    constructor() {
        super();
        
        this.state = {
          showMenu: false,
        };
        
        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }
      
    showMenu(event) {
        event.preventDefault();
        
        this.setState({ showMenu: true }, () => {
          document.addEventListener('click', this.closeMenu);
        });
    }
      
    closeMenu(event) {
        
        if (!this.dropdownMenu.contains(event.target)) {
          
          this.setState({ showMenu: false }, () => {
            document.removeEventListener('click', this.closeMenu);
          });  
          
        }
    }

    render() {
        return (
            
        <nav class="w3-top">
            <div class="w3-card navPar">
                 <a class="navLink w3-hide-medium w3-hide-large w3-right" href="javascript:void(0)" onclick="navToggle()"
                     title="Toggle Navigation Menu"><i class="fa fa-bars"></i></a>
                 <Link to="/"><a class="navLink"><img src={logo} class="homeLogo"></img></a></Link>
                 <Link to="/engage" class="navLink w3-hide-small"><a>ENGAGE</a></Link>
                 <Link to="/booking" class="navLink w3-hide-small"><a>BOOKING</a></Link>
                 <Link to="/about" class="navLink w3-hide-small"><a>ABOUT</a></Link>
                 
                {/* dropdown menu */}
                <div class="leftMenu">
                    <div class="dropParent">
                       <button class="navLink signIn" onClick={this.showMenu} > PROFILE </button>

                        {
                        this.state.showMenu
                            ? (
                            <div class="dropdown" ref={(element) => {this.dropdownMenu = element;}}>
                                <Link to="/requests" class="navLink"><a>REQUESTS</a></Link>
                                <Link to="/memberdata" class="navLink"><a>MEMBERS</a></Link>
                                <Link to="/songdata" class="navLink"><a>SONGS</a></Link>
                                <Link to="/favorites" class="navLink"><a>FAVORITES</a></Link>
                            </div>
                            )
                            : (
                            null
                            )
                        } 
                    </div>

                    <button class="navLink signIn w3-hide-small"><a onClick={this.props.signout}>SIGN OUT</a></button>
                    
                </div>  
            </div>
         </nav>       
        )
    }
}

