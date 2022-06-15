fetch("https://discord.com/api/guilds/439860439283662848/widget.json")
.then(response => {
   return response.json();
})
.then(jsondata => {
    
    document.getElementById("discord-online").innerHTML = ` 
    ${jsondata.presence_count}
  `
});


fetch("https://mcapi.xdefcon.com/server/grownupgamers.life/players/json")
.then(response => {
   return response.json();
})
.then(jsondata => {
    document.getElementById("minecraft-players").innerHTML = ` 
    ${jsondata.players}
  `

});

fetch("https://discord.com/api/v9/invites/ufnBxBS?with_counts=true&with_expiration=true")
.then(response => {
   return response.json();
})
.then(jsondata => {

    
    document.getElementById("total-discord").innerHTML = ` 
    ${jsondata.approximate_member_count}
  `

});








