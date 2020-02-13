// Used to toggle the menu on small screens when clicking on the menu button
function navToggle() {
    var x = document.getElementById("nav");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

// Exit modal when clicked outside the box
var modal = document.getElementById('eventModal');
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
