function SeriesSum(n){
  let sum = 0
  for(let i = 1, j = 1; i <= n*3; i+=3){
    sum += j/i
  }
  return sum.toFixed(2)
}
console.log(SeriesSum(2))