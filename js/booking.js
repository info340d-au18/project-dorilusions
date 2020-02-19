'use strict';


// Store all information into state variable

let newBooking = {

};


let name = document.querySelector('#name');
let event = document.querySelector('#eventName');
let email =document.querySelector('#email');
let date = document.querySelector('#date');
let eventlocation = document.querySelector('#eventLocation');
let message = document.querySelector('#message');

name.addEventListener('input',function(){
  newBooking.name = name.value;
});

event.addEventListener('input',function(){
  newBooking.event = event.value;
});

email.addEventListener('input',function(){
  newBooking.email = email.value;
});

date.addEventListener('input',function(){
  newBooking.date = date.value;
});
eventlocation.addEventListener('input',function(){
  newBooking.eventlocation = eventlocation.value;
});
message.addEventListener('input',function(){
  newBooking.message = message.value;
})



console.log(newBooking);
// button.addEventListener('click', () =>{

// })