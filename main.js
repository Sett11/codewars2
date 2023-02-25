function SumSquares(l){
  let c=0
  l.map(e=>typeof e==='number'?c+=e**2:c+=SumSquares(e))
  return c
}
console.log(SumSquares([10,[[10],10],[10]]))