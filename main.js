function generatePairs(m, n) {
  const arr = []
  for(let i = m; i <= n; i++){
    for(let j = m; j <= n; j++){
      j>=i?arr.push([i,j]):null
    }
  }
  return arr
}
console.log(generatePairs(2, 4))