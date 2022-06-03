
fetch("./patrons.json")
.then(response => {
   return response.json();
})
.then(jsondata => {
  //do stuff here

  document.getElementById("patrons").innerHTML = ` 
  ${jsondata.map(function(patron) {
    
    //convert name to UUID with mojang API

    //get profile img with UUID with API

    return `
    <div class="patron-profile"> 
      <h1>${patron.minecraft_user_name}</h1>
      <p> Since: ${patron.start_date}</p>
    </div> `

  }).join('')}

  `
});
