import React, { Component } from 'react';
import {Form} from './Form';
import firebase from 'firebase';
export class Booking extends Component {

    constructor(props){
        super(props);

        this.state = {
            submitted:false
        };

        this.bookings = firebase.database().ref('Bookings');
    }

    submit(){
       
        if(firebase.auth().currentUser == null){
            this.bookings.push({
                newBooking:this.state,
            })
        }   
        else{
            const userRef = this.bookings.child(firebase.auth().currentUser.uid); 
            userRef.push({
                newBooking:this.state,
            })
        }
       
    }
    
    // Lifting up state
    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
          [name]: value
        });

        
    }

    changeState = () => {
        this.setState({
            submitted: !this.state.submitted
        });
    }

    render() {
        if(this.state.submitted){
            return(
            <div class="w3-container w3-content w3-center w3-padding-64" id="intro"style={{maxWidth:800,marginTop:46}}>
                <h2 class="w3-wide">Thank you for your booking!</h2>
                    <p class="w3-justify w3-center">
                        We greatly appreciate your interest in letting us to perform for you. We will get back to you soon.
                        Feel free to follow us on our social media!
                    </p>
                    <p class="w3-justify w3-center">
                        You can also manage your bookings in your profile.
                    </p>
            </div>
            )
        }
        return (

            <div class="w3-container w3-content w3-center w3-padding-64" style={{maxWidth:800,marginTop:90 }} id="intro">
                <h2 class="w3-wide">Book a Performance</h2>
                <p class="w3-justify w3-center">
                    If you would like us to perform for your event, please fill out this form! The honorary price for a
                    performance is $200,
                    through this may change depending on the location, length, and scale of the performance.
                </p>
                <Form 
                input={this.state} 
                handleChange = {this.handleInputChange}
                update = {() => this.submit()}
                submitted = {this.changeState}>
                </Form>
            </div>
        )

    }
}