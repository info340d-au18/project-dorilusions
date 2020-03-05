import React, { Component } from 'react';
import './App.css';
<<<<<<< HEAD
import { HashRouter as Router, Route, Link, useRouteMatch } from "react-router-dom";
import { Homepage } from './Home';
import { About } from './About';
import { Engage } from './Engage';
import { Booking } from './Booking';
import { Signin } from './Signin';
import { AdminHome } from './AdminHome';

function AdminHome(){
  let { path, url } = useRouteMatch();

  return (
    <div>
      <h1>Welcome Back!</h1>
      <Link to={`${url}/memberdata`}>Member Data</Link>

      <Route path={`${path}/`} component={Topic}/>
    </div>
  )
}
=======
import { NavBar } from './navBar';
import 'bootstrap/dist/css/bootstrap.min.css';
>>>>>>> 823d73264b5e3a06b601788393ba3eb91466bf64

class App extends Component {
    render() {
        return (
          < NavBar ></NavBar>
          
            // <Router>

<<<<<<< HEAD
                <Route exact path="/" component={ Homepage } />
                <Route path="/about" component={ About } />
                <Route path="/engage" component={ Engage } />
                <Route path="/booking" component={ Booking } />
                <Route path="/signin">
                  <Signin/>
                </Route>/>
              </div>
            </Router>
=======
            

              
                // <Link to="/">Home</Link>
                // <Link to="/about">About</Link>
                // <Link to="/engage">Engage</Link>
                // <Link to="/booking">Booking</Link>
                // <Link to="/signin">Sign In</Link>

            //     <Route exact path="/" component={ Homepage } />
            //     <Route path="/about" component={ About } />
            //     <Route path="/engage" component={ Engage } />
            //     <Route path="/booking" component={ Booking } />
            //     <Route path="/signin" component={ Signin } />
           
              
            // </Router>
>>>>>>> 823d73264b5e3a06b601788393ba3eb91466bf64
            );
    }
}

export default App;
