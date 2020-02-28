'use strict';

import React, {
  Component
} from 'react'; //import React Component

class Booking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name = "holder",
      eventName = "holder",
      email = "example@gmail.com",
      date = "01-14-2020",
      eventLocation = "holder",
      price = 200,
      message = "holder"
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const value = event.target.value;
    setState({
      // ...state,
      [event.target.name]: value
    });
  }

  render() {
    return ( 
      <form 
        id = "booking-form"
        name = "booking-form">
        {/* action = "after_booking.html"  */}
        <label for="name" 
          class="w3-left">
          Name/Organization:
          <input 
            type="text" 
            id="name" 
            name="name" np
            placeholder="Name" 
            value="" 
            onChange={this.handleInputChange}/>
        </label>
       
      </form>
    );
  }
}