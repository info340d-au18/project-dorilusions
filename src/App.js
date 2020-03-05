import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './w3.css';
import './App.css';
import { NavBar } from './navBar';
import { Footer } from './Footer';

class App extends Component {
    render() {
        return (
          <div>
            < NavBar></NavBar>
            < Footer></Footer>
          </div>
        );
    }
}

export default App;
