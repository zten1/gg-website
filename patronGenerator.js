function getId(playername) {
    return fetch(`https://api.mojang.com/users/profiles/minecraft/${playername}`)
      .then(data => data.json())
      .then(player => player.id);
  }

  // Using .then (anywhere)
getId(`zten`).then(id => {
    console.log(`ID is ${id}`)
  })