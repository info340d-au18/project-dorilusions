'use strict';


// Store all information into state variable
// It stores all the info as for now but I will use to react
// to do something with it during stage 4
let state = {
  newBooking:{}
};


let name = document.querySelector('#name');
let event = document.querySelector('#eventName');
let email =document.querySelector('#email');
let date = document.querySelector('#date');
let eventlocation = document.querySelector('#eventLocation');
let message = document.querySelector('#message');

name.addEventListener('input',function(){
  state.newBooking.name = name.value;
});

event.addEventListener('input',function(){
  state.newBooking.event = event.value;
});

email.addEventListener('input',function(){
  state.newBooking.email = email.value;
});

date.addEventListener('input',function(){
  state.newBooking.date = date.value;
});
eventlocation.addEventListener('input',function (){
  state.newBooking.eventlocation = eventlocation.value;
});
message.addEventListener('input',function(){
  state.newBooking.message = message.value;
})  

// console.log(state.newBooking);

window.localStorage.setItem('bk',JSON.stringify(state.newBooking));