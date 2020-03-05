import React, { Component } from 'react';
import { NavBar } from './navBar';
import { Footer } from './Footer';
import './w3.css';
import './App.css';

export class Engage extends Component {
    render() {
        return(
            <div>
                <NavBar/>
                <div class="w3-container w3-content w3-center page-content top-margin" id="intro">
                    <h2>JOIN US</h2>
                    <p class="justify">
                        We'd be happy if you could stop by and say hello!  Feel free to add our Google calendar to keep up with our upcoming events!
                    </p>
                </div>

                <div id="calendar" class="w3-display-container">
                    <div>
                        <iframe src="https://calendar.google.com/calendar/b/1/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FLos_Angeles&amp;src=dXd0YWlrb0BnbWFpbC5jb20&amp;color=%233F51B5&amp;showTitle=1&amp;mode=MONTH&amp;title=Taiko%20Kai%20Schedule" style="border-width:0" width="800" height="600" frameborder="0" scrolling="no"></iframe>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}