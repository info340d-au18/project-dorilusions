import React, { Component } from 'react';

export class Form extends Component {


    render() {
        return (

         <div>
            <section class="booking-form" onSubmit={this.props.submitted}>
                <form id="booking-form" name="booking-form">
                    <label for="name" class="w3-left" >Name/Organization</label>
                    <input type="text" id="name" name="name" placeholder="Name" onChange={this.props.handleChange}></input>
                    <label for="event" class="w3-left">Name of Event</label>    
                    <input type="text" id="eventName" name="eventName" placeholder="Event Name" onChange={this.props.handleChange}></input>
                    <label for="email" class="w3-left">Email</label>
                    <input type="email" id="email" name="email" placeholder="Email" onChange={this.props.handleChange}></input>
                    <label for="date" class="w3-left">Date Of Performance</label>
                    <input type="date" id="date" name="date" placeholder="Event Date" onChange={this.props.handleChange}></input>
                    <label for="event" class="w3-left">Location Of Performance</label>
                    <input type="text" id="eventLocation" name="eventLocation" placeholder="Address" onChange={this.props.handleChange}></input>
                    <label for="event" class="w3-left">Price Point</label>
                    <input type="number" min="0.01" step="0.01" id="eventPrice" name="pricePoint" placeholder="USD" onChange={this.props.handleChange}></input>
                    <label for="message" class="w3-left">Additional Message</label>
                    <textarea id="message" name="message" placeholder="Message" onChange={this.props.handleChange}></textarea>
                    <input type="submit" value="Submit" onClick={this.props.update}/>
                </form>
            </section>
          </div>
        )

    }
}