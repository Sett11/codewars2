function ghostBusters(building) {
  return building.indexOf(' ') === -1 ? "You just wanted my autograph didn't you?" : building.replace(/\s/g, '')
}