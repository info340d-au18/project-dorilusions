import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Homepage } from './Home';
import { About } from './About';
import { Engage } from './Engage';
import { Booking } from './Booking';
import { MemberDataTable } from './DataTable';
import { SongDataTable } from './DataTable';

import './w3.css';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'

import { HashRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';
import { NavBar } from './navBar';
import { NavBarMember } from './navBar';
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

  signOut(){
    firebase.auth().signOut();
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
              <NavBar openModal={this.toggleModal}></NavBar>

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
            <NavBarMember signout={this.signOut}></NavBarMember>

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
