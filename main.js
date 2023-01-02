function findNextSquare(sq) {
  let min = Math.sqrt(sq)
  if(!Number.isInteger(min)) return -1
  return (min+1)**2 
}
console.log(findNextSquare(625))