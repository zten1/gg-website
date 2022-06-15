fetch("./json_files/worldDownloads.json")
.then(response => {
   return response.json();
})
.then(jsondata => {
    console.log(jsondata.length)
  document.getElementById("downloads-container").innerHTML = ` 
  ${jsondata.map(function(world_download) {

    return `
        <div class="download-content-box" style="width: calc(100% / ${jsondata.length});">
            <a href="${world_download.url}">
                ${world_download.world_name}
            </a>
            <p> ${world_download.description} </p>
        </div>   
    `
  }).join('')}
  `
});