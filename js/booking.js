'use strict';


// Store all information into state variable

let state = {
  bookingList :[],
  addedBooking:null
};

class Booking{

    addOrg(org){
      this.organization = org;
    }
    addName(name){
      this.eventName = name;
    }
    addEmail(email){
      this.email = email;
    }
    addDate(date){
      this.date = date;
    }
    addLoc(location){
      this.location = location;
    }
    addPrice(price){
      this.price = price;
    }
    addMessage(message){
      this.message = message;
    }
    render(){
      state.bookingList.push(this);
    }

}

// let bk = new Booking();
// bk.addOrg('HCUW');
// bk.render();

// console.log(state.bookingList);

let allInput = document.getElementsByTagName('input');

console.log(allInput[0]);

document.getElementById('name').addEventListener('input')

// function update(input){
//   state.inputtedBooking.organization = input;
//   // console.log(state.inputtedBooking.organization);

// }


// button.addEventListener('click', () =>{

// })