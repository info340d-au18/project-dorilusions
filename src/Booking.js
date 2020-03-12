import React, { Component } from 'react';
import {Form} from './Form';
export class Booking extends Component {

    state = {
        
    };
    
    // Lifting up state
    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
          [name]: value
        });
        console.log(this.state)
        
    }

    // Save this for Firebase
    // handleSubmit(event) {
    //     console.log(this.state.name);
    //     event.preventDefault();
    // }

    render() {
        
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
                handleChange = {this.handleInputChange}>
                </Form>
            </div>
        )

    }
}