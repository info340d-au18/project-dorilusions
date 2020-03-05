import React, { Component } from 'react';
import bg from './img/minidoka.jpg'
import './App.css';
import './w3.css'

export class Homepage extends Component {
    render() {
        return (
            <div class="w3-content">
                <div class="w3-display-container w3-center">
                    <img class="banner" src={bg} alt="Minidoka 2017"></img>
                    <div class="w3-display-middle w3-container w3-text-white w3-padding-64 w3-hide-small">
                        <h1 class="w3-text-white">Sunday, Feburary 16</h1>
                        <h1 class="w3-jumbo w3-text-white w3-wide w3-margin-bottom">Minidoka Day of Rememberance</h1>    
                        <h6><a href="#upcomingPerformances"><button
                            class="w3-button w3-white w3-padding-large w3-large w3-opacity w3-margin-top w3-hover-opacity-off">MORE
                            UPCOMING EVENTS</button></a></h6>
                    </div>
                </div>
            </div>

        )
    }
} 