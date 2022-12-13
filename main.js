function differenceOfSquares(n){
  const arr = []
  while(n){
    arr.unshift(n)
    n--
  }
  return arr.reduce((acc,curr) => acc + curr)**2 - arr.map(el => el**2).reduce((acc, curr) => acc+curr)
}
console.log(differenceOfSquares(100))