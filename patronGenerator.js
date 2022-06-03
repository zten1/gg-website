fetch("./patrons.json")
.then(response => {
   return response.json();
})
.then(jsondata => {

  document.getElementById("patrons").innerHTML = ` 
  ${jsondata.map(function(patron) {
  
    var imgURL = "https://mc-heads.net/avatar/" + patron.minecraft_user_name;

    return `
    <div class="patron-profile"> 
      <img src="${imgURL}">
      <h1>${patron.minecraft_user_name}</h1>
      <p> Since: ${patron.start_date}</p>
    </div> `

  }).join('')}
  `
});





