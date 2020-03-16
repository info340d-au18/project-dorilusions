import React, { Component } from 'react';
import firebase from 'firebase';
import { object } from 'prop-types';

import './w3.css';
import './App.css';
export class Request extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading : false
        }
        this.myRef = firebase.database().ref('Bookings/');
        this.myRef.on("value", (snapshot) => {
            if(!this.state.loading){
                this.setState({loading:true})   
            }
            console.log("something changed on firebase, so I will reset state")
            this.setState({ bookings: snapshot.val()})
        })
    }

    remove(name){
        let currentid = firebase.auth().currentUser.uid;
        let myRef = firebase.database().ref('Bookings/'+currentid);
        
        myRef.child(name).remove();
    }

    render() {
        let allB = [];
        let data = this.state.bookings;
        let currentid = firebase.auth().currentUser.uid;
        let myRef = firebase.database().ref('Bookings/'+currentid);
        // console.log(myRef.child('-M2Y_MxiJGJTF-KFIQdE').remove());
        if(data != null){
            let keys = Object.keys(data);
                for(let i=0; i <keys.length;i++){
                    if(keys[i] == currentid){
                        let iDkey = keys[i];
                        let allBookings = data[iDkey];
                        let BookingKeys = Object.keys(allBookings);
                        for(let j=0; j < BookingKeys.length;j++){
                            let oneBooking = allBookings[BookingKeys[j]].newBooking;
                            let thesekeys = Object.keys(oneBooking);
                            let individual = {};
                            for(let k = 0; k <thesekeys.length;k++){
                                individual[[thesekeys[k]]] = oneBooking[thesekeys[k]];
                            }
                            individual["key"] = BookingKeys[j];
                            allB.push(individual);
                        
                        }
                            
                            
                    }
                        
                };
                    
        }     
                
        
        console.log(allB);
        // if(allB.length == 0){
        //     window.location.reload();
        // }
        if(!this.state.loading){
            return<p class="w3-center" style={{marginTop:100}}>{"Please Refresh your page"}</p>
        }
        return (
            <div class="w3-container w3-content w3-padding-64" style={{maxWidth:800,marginTop:46}}>
                <h2 class="w3-center">PERFORMANCE REQUESTS</h2>
                <div id="requests" class="w3-row-padding w3-padding-32" style={{margin: 16}}>
                    {allB.map((indB) =>{
                        return(
                            <div id="pending-booking" class="w3-margin-bottom">
                                <div class="w3-center block-example border border-dark" style={{border: "white",border:"Solid",border:1}}>
                                    <p id="eventName"><b>{indB.eventName}</b></p>
                                    <p id="orgName">{"By: " + indB.name}</p>
                                    <p id="contact">{"Contact Information: " + indB.email}</p>
                                    <p id="price">{"Purposed Price" + indB.pricePoint}</p>
                                    <p id="location">{"@: " + indB.eventLocation}</p>
                                    <p id="message">{"Additional Message:" + indB.message}</p>
                                    <p id="Time" class="w3-opacity">{indB.date}</p>                          
                                    <button class="basicButton" onClick={this.remove.bind(this,indB.key)}>Remove</button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div> 
        )

    }
}

