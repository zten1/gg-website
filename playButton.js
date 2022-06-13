var play_modal = document.getElementsByClassName("play-modal")[0];
var play_modal_container = document.getElementById("play-modal-container");
var btn = document.getElementById("play-button");
var btn_dropdown = document.getElementById("play-button-dropdown");

btn.onclick = function() {
  play_modal.style.display = "block";
  console.log("play");
}

btn_dropdown.onclick = function() {
  play_modal.style.display = "block";
  console.log("play");
}

window.onclick = function(event) {
  if (event.target == play_modal) {
    play_modal.style.display = "none";
  }
}

