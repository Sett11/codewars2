function generateIntegers(m, n) {
  const arr = []
  while(m<=n){
    arr.push(m)
    m++
  }
  return arr
}
console.log(generateIntegers(2,5))