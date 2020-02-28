// Used to toggle the menu on small screens when clicking on the menu button
function navToggle() {
  var x = document.getElementById("nav");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}

// Used to remove and add
function remove(ele) {
  var y = ele.parentElement;
  var z = y.parentElement;
  z.removeChild(y);
}


function accept(ele) {
  var x = ele.parentElement;
  var y = x.parentElement;
  var z = x.getElementsByTagName("p");
  var i = document.getElementById("allPerformance");
  let newBooking = document.createElement("div");
  let button = document.createElement("button");
  button.classList = "basicButton";
  button.onclick = "remove()";
  button.textContent = "Remove";
  newBooking.classList = "w3-container w3-white w3-center";
  newBooking.appendChild(z[0]);
  newBooking.appendChild(z[3]);
  newBooking.appendChild(z[4]);
  newBooking.appendChild(button);
  i.appendChild(newBooking);
  y.removeChild(x);
  let test = window.localStorage.getItem('bk');
  console.log(test);
}

// Exit modal when clicked outside the box
var modal = document.getElementById('eventModal');
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
