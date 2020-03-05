import React, { Component } from 'react';
import bg from './img/minidoka.jpg';
import nsudor from './img/nsudor.jpg';
import tosa from './img/tosatimeless.jpg';
import sakura from './img/sakuracon2020.jpg';

import './w3.css'
import styles from './App.css';


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

                <div id="eventModal-1" class="eventModal">
                    <div class="eventModalContent w3-card-4">
                        <header class="w3-container w3-center w3-padding-32">
                            <span onclick="document.getElementById('eventModal-1').style.display='none'"
                                class="w3-button w3-xlarge w3-display-topright">×</span>
                            <h2 class="w3-wide">Event Info</h2>
                        </header>
                        <div class="w3-container">
                            <p>Nikkei Student Union at UW invites you to our annual Day of Remembrance event on February 20th,
                                2020! Day of Remembrance commemorates the signing of Executive Order 9066, which authorized the
                                unjust imprisonment of over 120,000 Japanese American immigrants and citizens during WWII.
                                Today, we are seeing history repeat itself with the inhumane detention and racist treatment of
                                immigrants in our country. </p>
                            <p>We are partnering with Japanese Student Association at University of Washington and ASUW Asian
                                Student Commission to host a Tsuru Fold-in to contribute to the Tsuru for Solidarity movement.
                                Tsuru, origami paper cranes, have long been a symbol of hope and compassion in Japanese culture.
                                The Tsuru that we fold will be included in Tsuru for Solidarity’s National Pilgrimage to Close
                                the Camps in Washington D.C. this June. Join us for a performance by Taiko Kai at the University
                                of Washington , speakers, refreshments, and tsuru folding! </p>
                            <p>The history of American concentration camps is part of our campus’s history. In 1942 over 400 UW
                                students of Japanese ancestry were forced to leave their education behind and imprisoned due
                                solely to their race. Through this event we hope to give the UW community an opportunity to pay
                                tribute to this aspect of our history and recognize how the hateful ideology which motivated it
                                continues to play out on and off our campus today. Come learn, fold, and find out about further
                                actions you can take!</p>
                            <p>February 20th, 2020, 6:00-8:00pm at UW’s Intellectual House</p>
                         </div>
                    </div>
                </div>

            </div>
        )
    }
} 