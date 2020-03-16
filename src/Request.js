import React, { Component } from 'react';
import firebase from 'firebase';
import { object } from 'prop-types';
export class Request extends Component {

    readData(){
        let allEl = [];
        let myRef = firebase.database().ref('Bookings/');
        let val = myRef.on('value', function(snapshot) {
            // Get the value of the data
            let currentid = firebase.auth().currentUser.uid;
            let data = snapshot.val();
            if(data != null){
                let keys = Object.keys(data);
                    for(let i=0; i <keys.length;i++){
                        if(keys[i] == currentid){
                            let iDkey = keys[i];
                            let allBookings = data[iDkey];
                            let BookingKeys = Object.keys(allBookings);
                            for(let j=0; j < BookingKeys.length;j++){
                                let oneBooking = allBookings[BookingKeys[j]];
                                console.log(oneBooking.newBooking.date);
                            }
                        }
                    };
                }
            
        
        });
        
    }
    
    render() {
        this.readData();
        return (

            <div class="w3-container w3-content w3-center w3-padding-64" style={{maxWidth:800,marginTop:90 }} id="intro">
                <h2 class="w3-wide">My Requests</h2>
                <p class="w3-justify w3-center">
                    {}
                </p>
            </div>
        )

    }
}