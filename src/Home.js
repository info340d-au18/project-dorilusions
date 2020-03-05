import React, { Component } from 'react';
import bg from './img/minidoka.jpg';
import nsudor from './img/nsudor.jpg';
import tosa from './img/tosatimeless.jpg';
import sakura from './img/sakuracon2020.jpg';



import './w3.css'
import './App.css';


export class Homepage extends Component {
    render() {
        return (
            <div>
                {/* Image */}
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

                {/* Intro */}

                <div class="w3-container w3-content w3-center w3-padding-64" id="intro">
                    <h2>WELCOME TO UW TAIKO KAI!</h2>
                    <p class="justify">
                        Taiko Kai was founded in 2013 by the Matsudaira sisters, three UW students who wanted
                        to share Japanese culture with UW and the greater Seattle community. Since then, Taiko Kai has
                        performed at various on and off campus events, such as the FIUTS CulturalFest, Redmond Lights, and
                        Sakura-Con.
                    </p>

                    <p class="justify"> Our club focuses on its members, helping them develop personal and team-based
                        performance skills. Our
                        members learn about how to effectively move their bodies and perform for an audience. Our club also
                        builds connections between its members and the American Japanese community, working with other Taiko
                        groups and Japanese events.
                    </p>
                </div>

                {/* Upcoming Performances */}

                <div class="w3-black" id="upcomingPerformances">
                    <div class="w3-container w3-content w3-padding-64">
                        <h2 class="w3-center">UPCOMING PERFORMANCES</h2>
                        <div class="w3-row-padding w3-padding-32" style={{margin:0}}>
                            <div class="w3-margin-bottom">
                                <img src={nsudor} alt="NSU Day of Rememberance" style={{width: "100%"}}></img>
                                <div class="w3-container w3-white w3-center">
                                    <p><b>NSU Day Of Rememberance</b></p>
                                    <p>UW Intellectual House</p>
                                    <p class="w3-opacity">Feburary 20 6-8 PM</p>
                                    <button class="basicButton"
                                        onclick="document.getElementById('eventModal-1').style.display='block'">Learn
                                        More</button>
                                </div>
                            </div>

                            <div class="w3-margin-bottom">
                                <img src={tosa} alt="NSU Day of Rememberance" style={{width: "100%"}}></img>
                                <div class="w3-container w3-white w3-center">
                                    <p><b>TOSA Carnival</b></p>
                                    <p>UW HUB Ballroom</p>
                                    <p class="w3-opacity">Feburary 22nd 3-8 PM</p>
                                    <button class="basicButton"
                                        onclick="document.getElementById('eventModal-2').style.display='block'">Learn
                                        More</button>
                                </div>
                            </div>

                            <div class="w3-margin-bottom">
                                <img src={sakura} alt="NSU Day of Rememberance" style={{width: "100%"}}></img>
                                <div class="w3-container w3-white w3-center">
                                    <p><b>Sakura-Con</b></p>
                                    <p>Washington State Convention Center</p>
                                    <p class="w3-opacity">April 11th 10-11 AM</p>
                                    <button class="basicButton"
                                        onclick="document.getElementById('eventModal-3').style.display='block'">Learn
                                        More</button>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}   