function findTheBall(start, swaps) {
  let counter = start
  for(let i = 0; i < swaps.length; i++){
    if(swaps[i][0] === counter){
      counter = swaps[i][1]
      swaps[i] = '&'
    }
    if(swaps[i][1] === counter){
      counter = swaps[i][0]
      swaps[i] = '&'
    }
  }
  return counter
}
console.log(findTheBall(0, [[0, 1], [1, 2], [2, 0], [0, 1], [1, 2], [2, 1], [2, 0], [0, 2]]))