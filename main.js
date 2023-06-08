function prioritizeMissiles(m){
  return m.sort((a,b)=>b.speed/b.distance-a.speed/a.distance).map(e=>e.name)
}

console.log(prioritizeMissiles([
  {name: 'VIXEN_V1.1', distance: 500, speed: 4},
  {name: 'COMET_V4', distance: 1000, speed: 500},
  {name: 'CUPID_V5', distance: 100, speed: 1} ]))