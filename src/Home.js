import React, { Component } from 'react';
import bg from './img/minidoka.jpg';
import nsudor from './img/nsudor.jpg';
import tosa from './img/tosatimeless.jpg';
import sakura from './img/sakuracon2020.jpg';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'
import { HashLink as Link } from 'react-router-hash-link';
import {FaHeart} from 'react-icons/fa'

import firebase from 'firebase';

import './w3.css'
import './App.css';


export class Homepage extends Component {

    constructor(props) {
        super(props);
    
        this.state = { 
            isOpen: false,
            isFavorited: false
        };

        this.favoritesRef = firebase.database().ref('Favorites');
    }

    open = (data) => {
        this.setState({
            isOpen: !this.state.isOpen,
            name: data[0],
            loc: data[1],
            time: data[2],
            description: data[3]
         });
         
    }

    toggleModal = () => {
        this.setState({
          isOpen: !this.state.isOpen
        });
    }

    toggleFavorite = () => {
        this.setState({
            isFavorited: !this.state.isFavorited
        });
        this.favoritesRef.push({
            newFavorite: this.state
        })
    }

    render() {
        let data1 = [
            "NSU Day Of Rememberance", 
            "UW Intellectual House", 
            "Feburary 20 6-8 PM",
            ["Nikkei Student Union at UW invites you to our annual Day of Remembrance event on February 20th,",
                "2020! Day of Remembrance commemorates the signing of Executive Order 9066, which authorized the",
                "unjust imprisonment of over 120,000 Japanese American immigrants and citizens during WWII.",
                "Today, we are seeing history repeat itself with the inhumane detention and racist treatment of",
                "immigrants in our country."]
        ];
        let data2 = [
            "TOSA Carnival", 
            "UW HUB Ballroom", 
            "Feburary 22nd 3-8 PM",
            ["TOSA is back again with our annual event to take you for a trip down memory lane -- Timeless",
                "Taiwan! We welcome you to immerse yourself in an authentic Taiwanese experience as we celebrate",
                "Youth, Dreams, Friendship, and Love."]
        ];
        let data3 = [
            "Sakura-Con", 
            "Washington State Convention Center", 
            "April 11th 10-11 AM",
            ["Sakura-Con is the oldest and most well-attended Anime Convention in the Pacific Northwest.",
                "Sakura-Con features all the things fans love, anime, manga, gaming, music, panels, guests,",
                "dances and more! Non-profit, all ages, and all volunteer run, Sakura-Con is truly 'for the fans",
                "by the fans'."]
        ];
        return (
            <div>
                {/* Image */}
                <div class="w3-display-container w3-center">
                    <img class="banner" src={bg} alt="Minidoka 2017"></img>
                    <div class="w3-display-middle w3-container w3-text-white w3-padding-64 w3-hide-small">
                        <h1 class="w3-text-white">Sunday, Feburary 16</h1>
                        <h1 class="w3-jumbo w3-text-white w3-wide w3-margin-bottom">Minidoka Day of Rememberance</h1>    
                        <h6><Link to="/#upcomingPerformances"><a><button
                            class="w3-button w3-white w3-padding-large w3-large w3-opacity w3-margin-top w3-hover-opacity-off">MORE
                            UPCOMING EVENTS</button></a></Link></h6>
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
                                    <button id="1" class="basicButton" onClick={
                                        this.open.bind(this, data1)
                                    }>Learn More</button>   
                                </div>
                            </div>

                            <div class="w3-margin-bottom">
                                <img src={tosa} alt="Taiwanese Overseas Student Association event poster" 
                                style={{width: "100%"}}></img>
                                <div class="w3-container w3-white w3-center">
                                    <p><b>TOSA Carnival</b></p>
                                    <p>UW HUB Ballroom</p>
                                    <p class="w3-opacity">Feburary 22nd 3-8 PM</p>
                                    <button id="2" class="basicButton" onClick={
                                        this.open.bind(this, data2)
                                    }>Learn More</button>
                                </div>
                            </div>

                            <div class="w3-margin-bottom">
                                <img src={sakura} alt="Sakuracon" style={{width: "100%"}}></img>
                                <div class="w3-container w3-white w3-center">
                                    <p><b>Sakura-Con</b></p>
                                    <p>Washington State Convention Center</p>
                                    <p class="w3-opacity">April 11th 10-11 AM</p>
                                    <button id="3" class="basicButton" onClick={
                                        this.open.bind(this, data3)
                                    }>Learn More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Event Modal */}
                <Modal show={this.state.isOpen} onClose={this.toggleModal} style={{marginTop:60}}>
                    <Modal.Header>
                        <Modal.Title>{this.state.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {<div>
                            <p>{"@ " + this.state.loc}</p>
                            <p>{this.state.time}</p>
                            <p>{this.state.description}</p>
                        </div>}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button><FaHeart onClick = {this.toggleFavorite} style={{cursor:"pointer"}}/></Button>
                        <Button variant="secondary" onClick={this.toggleModal}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}   