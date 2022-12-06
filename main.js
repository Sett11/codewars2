function duckDuckGoose(players, goose) {
    return players[(goose - 1) % players.length].name
  }
  console.log(duckDuckGoose(['a', 'b', 'c', 'd'], 1))