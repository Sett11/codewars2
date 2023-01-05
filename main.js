function fruit(reels, spins){
  const res = `${reels[0][spins[0]]},${reels[1][spins[1]]},${reels[2][spins[2]]}`
  .replace(/Jack/g, 1).replace(/Queen/g,2)
  .replace(/King/g,3).replace(/Bar/g,4).replace(/Cherry/g,5).replace(/Seven/g,6).replace(/Shell/g,7)
  .replace(/Bell/g,8).replace(/Star/g,9).replace(/Wild/g,10)
  return [res.split`,`.sort((a,b)=>a-b).map(Number)]
  .map((el)=>{
    if(el[0]===el[1]&&el[1]===el[2]){
      return el[0]*10
    }
    if(el[0]===el[1]&&el[2]===10||el[2]===el[1]&&el[0]===10){
      return el[1]*2
    }
    if(el[0]===el[1]&&el[1]!==el[2]||el[2]===el[1]&&el[1]!==el[0]){
      return el[1]
    }
    return 0
  })[0]
}
console.log(fruit([["King", "Cherry", "Bar", "Jack", "Seven", "Queen", "Star", "Shell", "Bell", "Wild"],["Bell", "Seven", "Jack", "Queen", "Bar", "Star", "Shell", "Wild", "Cherry", "King"],["Wild", "King", "Queen", "Seven", "Star", "Bar", "Shell", "Cherry", "Jack", "Bell"]],[0,0,1]))