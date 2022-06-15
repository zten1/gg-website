fetch("./json_files/staffPeople.json")
.then(response => {
   return response.json();
})
.then(jsondata => {

  document.getElementById("staff-content-box").innerHTML = ` 
  ${jsondata.map(function(staff) {
  
    var imgURL = "https://mc-heads.net/avatar/" + staff.user_name;
    console.log(staff.user_name)
    return `
    <div class="staff-profile">
        <img src="${imgURL}">
        <h1>${staff.user_name}</h1>
        <p>${staff.description} </p>
    </div>
    `
  }).join('')}
  `
});