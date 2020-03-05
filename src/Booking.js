import React, { Component } from 'react';

export class Booking extends Component {

    constructor(props) {
        super(props);
        this.state = {
          name:''
        };
    
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    
    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    handleSubmit(event) {
        console.log(this.state.name);
        event.preventDefault();
    }

    render() {
        return (

            <div class="w3-container w3-content w3-center w3-padding-64" style={{maxWidth:800,marginTop:90 }} id="intro">
                <h2 class="w3-wide">Book a Performance</h2>
                <p class="w3-justify w3-center">
                    If you would like us to perform for your event, please fill out this form! The honorary price for a
                    performance is $200,
                    through this may change depending on the location, length, and scale of the performance.
                </p>
                <section class="booking-form">
                    <form id="booking-form" name="booking-form" onSubmit={this.handleSubmit} onChange={this.handleInputChange}>
                        <label for="name" class="w3-left">Name/Organization</label>
                        <input type="text" id="name" name="name" placeholder="Name" ></input>
                        <label for="event" class="w3-left">Name of Event</label>    
                        <input type="text" id="eventName" name="eventName" placeholder="Event Name"></input>
                        <label for="email" class="w3-left">Email</label>
                        <input type="email" id="email" name="email" placeholder="Email"></input>
                        <label for="date" class="w3-left">Date Of Performance</label>
                        <input type="date" id="date" name="date" placeholder="Event Date"></input>
                        <label for="event" class="w3-left">Location Of Performance</label>
                        <input type="text" id="eventLocation" name="eventLocation" placeholder="Address"></input>
                        <label for="event" class="w3-left">Price Point</label>
                        <input type="number" min="0.01" step="0.01" id="eventPrice" name="pricePoint" placeholder="USD"></input>
                        <label for="message" class="w3-left">Additional Message</label>
                        <textarea id="message" name="message" placeholder="Message"></textarea>
                        <input type="submit" value="Submit" />
                    </form>
                </section>
            </div>
        )

    }
}