function generatePairs(n) {
  const arr = []
  for(let i = 0; i <= n; i++){
    for(let j = 0; j <= n; j++){
      j>=i?arr.push([i,j]):null
    }
  }
  return arr
}
console.log(generatePairs(2))