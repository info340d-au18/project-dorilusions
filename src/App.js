import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Homepage } from './Home';
import { About } from './About';
import { Engage } from './Engage';
import { Booking } from './Booking';
import { MemberDataTable } from './DataTable';
import { SongDataTable } from './DataTable';

import './w3.css';

import logo from './img/logo-new.png';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'

import { HashRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';
import { NavBar } from './navBar';
import { Footer } from './Footer';

import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';


//Configure Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAYDuPgaEnxSpQtvezwoXEGCpGZJpW58xw",
  authDomain: "info-340-project-50443.firebaseapp.com",
  databaseURL: "https://info-340-project-50443.firebaseio.com",
  projectId: "info-340-project-50443",
  storageBucket: "info-340-project-50443.appspot.com",
  messagingSenderId: "19341566622",
  appId: "1:19341566622:web:0e2bf0c56b2c1ed8a0518f",
  measurementId: "G-4V8JH30S6M"
};

firebase.initializeApp(firebaseConfig);

const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID        
  ]
};



class App extends Component {

  constructor(props){
    super(props);
    this.state = {
       // Local signed-in state.
      isSignedIn: false,
      isOpen: false 
    }
    
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  
  componentDidMount() {
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged((user) => {                        
        this.setState({ isSignedIn: !!user })          
       
    })
  }

  componentWillUnmount() {
    this.unregisterAuthObserver();
  }

  render() {
    if(!this.state.isSignedIn){
      return(
        <div>
          <Router>
                <nav class="w3-top">
                   <div class="w3-bar w3-card transparentNav">
                        <a class="navLink w3-hide-medium w3-hide-large w3-right" href="javascript:void(0)" onclick="navToggle()"
                            title="Toggle Navigation Menu"><i class="fa fa-bars"></i></a>
                        <Link to="/"><a class="navLink"><img src={logo} class="homeLogo"></img></a></Link>
                        {/* <Link to="/engage"><a class="navLink w3-hide-small">ENGAGE</a></Link> */}
                        <Link to="/booking"><a class="navLink w3-hide-small" style={{color:"white"}}>BOOKING</a></Link>
                        <Link to="/about"><a class="navLink w3-hide-small" style={{color:"white"}}>ABOUT</a></Link>
                        {/* <Link to="/memberdata"><a class="navLink w3-hide-small" style={{color:"white"}}>MEMBERS</a></Link>
                        <Link to="/songdata"><a class="navLink w3-hide-small" style={{color:"white"}}>SONGS</a></Link> */}
                        <a class="navLink signIn w3-hide-small" style={{color:"white"}} onClick={this.toggleModal.bind(this)}>SIGN IN</a>
                    </div>
                </nav>

              <Route exact path="/" component={ Homepage } />
              <Route path="/about" component={ About } />
              <Route path="/engage" component={ Engage } />
              <Route path="/booking" component={ Booking } />
              
              {/* <Route path="/memberdata" component={ MemberDataTable } />
              <Route path="/songdata" component={ SongDataTable } /> */}
              <Footer></Footer>
          </Router>
          <Modal show={this.state.isOpen} onClose={this.toggleModal}>
                    <Modal.Header>
                        <Modal.Title>{"Please Sign In Here"}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {<div>
                          <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}></StyledFirebaseAuth>
                        </div>}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.toggleModal}>
                            Close
                        </Button>
                    </Modal.Footer>
          </Modal>
        </div>  
      );
    }
    return (
      <div>
        <Router>
            <NavBar>

            </NavBar>

              <Route exact path="/" component={ Homepage } />
              <Route path="/about" component={ About } />
              <Route path="/engage" component={ Engage } />
              <Route path="/booking" component={ Booking } />
              <Route path="/memberdata" component={ MemberDataTable } />
              <Route path="/songdata" component={ SongDataTable } />
              
              <Footer></Footer>
          </Router>

          

        </div>  
      );
    }
}

export default App;
