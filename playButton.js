var modal = document.getElementsByClassName("play-modal")[0];
var modal_container = document.getElementsByClassName("play-modal-container")[0];
var btn = document.getElementById("play-button");

var btn = document.getElementById("play-button");

span.onclick = function() {
  modal.style.display = "none";
}

btn.onclick = function() {
  modal.style.display = "block";
}

window.onclick = function(event) {
  if (event.target == modal_container) {
    modal.style.display = "none";
  }
}