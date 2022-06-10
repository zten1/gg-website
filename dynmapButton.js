var dynmap_modal = document.getElementsByClassName("dynmap-container")[0];

var span = document.getElementsByClassName("dynmap-close")[0];

var dynmap_background = document.getElementsByClassName("dynmap-background")[0];

var btn = document.getElementById("dynmap-button");

span.onclick = function() {
  dynmap_modal.style.display = "none";
}

btn.onclick = function() {
  dynmap_modal.style.display = "block";
}

window.onclick = function(event) {
  if (event.target == dynmap_background) {
    dynmap_modal.style.display = "none";
  }
}