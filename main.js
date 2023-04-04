function reindeers(p){
  if(p>180) throw Error()
  return !p?2:p<30?3:Math.ceil(p/30)+2
}

console.log(reindeers(31))