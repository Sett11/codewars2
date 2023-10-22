function countTheAnimals(o) {
  let c=0
  for(let i in o)c+=parseInt(o[i],2)
  return c
}

console.log(countTheAnimals({aardvark: '1101', tiger: '1100', donkey: '1100', emu: '1010'}))